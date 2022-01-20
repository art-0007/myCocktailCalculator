class Calculator {
    static all = []
    static calculatorForm = document.getElementById("calculator-form")
    static calculatorContainer = document.getElementById("calculator-container")

    constructor({cocktail, ingrName, volume, price, abv, persons, cocktPerPers}) {
        this.cocktail = cocktail
        this.ingrName = ingrName
        this.volume = volume
        this.price = price
        this.abv = abv
        this.persons = persons
        this.cocktPerPers = cocktPerPers

        Calculator.all.push(this)

    }

    static renderCalculatorForm() {
        // debugger;
        Calculator.calculatorForm.innerHTML += `
    <table style="width:100%">
        <tr>
          <th>Cocktail Name</th>
          <th>Ingredient Name</th>
          <th>Bottle volume</th>
          <th>Bottle price</th>
          <th>Alcohol by volume (ABV)</th>
        </tr>
        <tr>
          <td><select id='cockt-calc-name'><option>test</option></select></td>
          <td><select id='ing-calc-name'><option>test</option></select></td>
          <td><input type="number" id='volume'></td>
          <td><input type="number" id='price'></td>
          <td><input type="number" id='abv'></td>
        </tr>
        
      </table>
      
      <table style="width:50%">
        <tr>
          <th>Number of persons</th>
          <th>Number of cocktails per person</th>
        <tr>
          <td><input type="number" id='persons'></td>
          <td><input type="number" id='coct-by-pers'></td>
        </tr>  
      </table>

    <section>
        <p> <button type="submit">Calculate the Party</button> </p>
    </section>
         `
         Calculator.addIngrsToCalculator()
         Calculator.addCocktsToCalculator()

    }
    
    static calculateParty() {
        
        const data = {
            cocktail: document.getElementById("cockt-calc-name").value,
            ingrName: document.getElementById("ing-calc-name").value,
            volume: document.getElementById("volume").value,
            price: document.getElementById("price").value,
            abv: document.getElementById("abv").value,
            persons: document.getElementById("persons").value,
            cocktPerPers: document.getElementById("coct-by-pers").value   
        }
        
        const party = new Calculator(data)
        Calculator.renderResultData(party)
        
    }

    static totalBottles(party) {
        const ingredient_id = Ingredient.all.find(i => i.name === party.ingrName).id
        const cocktail_id = Cocktail.all.find(c => c.name === party.cocktail).id
        const dose_quantity = Dose.all.find(d => d.cocktail_id === cocktail_id && d.ingredient_id === ingredient_id).quantity 
        const total = parseInt(dose_quantity) * parseInt(party.cocktPerPers) * parseInt(party.persons)
        const result = Math.ceil(total/parseInt(party.volume))
        return result

    }

    static totalPrise(party) {
        const total_price = Calculator.totalBottles(party) * parseInt(party.price)
        return total_price
    }

    static costPerPerson(party) {
        const cost_per_person = Calculator.totalPrise(party)/parseInt(party.persons)
        return cost_per_person
    }

    static renderResultData(party) {
        
        Calculator.calculatorContainer.innerHTML += `
        <fieldset>
        <table style="width:100%">
        <tr>
          <th>Total of Bottles</th>
          <th>Total price</th>
          <th>Cost per person</th>
        </tr>
        <tr>
          <td id="total-bottles">result</td>
          <td id="total-price">result</td>
          <td id="cost-per-person">result</td>
        </tr>
        
      </table>
      </fieldset>
        `
        
        const total_btl = Calculator.totalBottles(party)
        const total_prc = Calculator.totalPrise(party) 
        const cost_per_per = Calculator.costPerPerson(party)
        
        Calculator.addOnDom(total_btl, total_prc, cost_per_per)
    }

    static addOnDom(total_btl, total_prc, cost_per_per) {
        debugger;
        const total_of_bottles = document.getElementById("total-bottles")
        const total_price = document.getElementById("total-price")
        const cost_per_pers = document.getElementById("cost-per-person")
        total_of_bottles.innerHTML = total_btl
        total_price.innerHTML = total_prc
        cost_per_pers.innerHTML = cost_per_per

    }

    static addIngrsToCalculator() {
        const dropDownIngr  = document.getElementById("ing-calc-name")
        Ingredient.all.forEach(ing => {
         dropDownIngr.innerHTML += `
             <option id="exist-ingr-${ing.id}">
             ${ing.name}
             </option>
         `
        })
         
     }

     static addCocktsToCalculator() {
        //  debugger;
        const dropDownCockts  = document.getElementById("cockt-calc-name")
        Cocktail.all.forEach(c => {
            dropDownCockts.innerHTML += `
             <option id="exist-cockt-${c.id}">
             ${c.name}
             </option>
         `
        })
         
     }

}