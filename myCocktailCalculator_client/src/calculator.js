class Calculator {
    static all = []
    static calculatorForm = document.getElementById("calculator-form")
    static tableForm = document.getElementById("calculator-table")
    static calculatorContainer = document.getElementById("calculator-container")
    static calculatorResult = document.getElementById("calculator-result")


    constructor({cocktail, dose, volume=500, price=0, abv=0, persons=1, cocktPerPers=1}) {
        this.cocktail = cocktail
        this.dose = dose
        this.volume = volume
        this.price = price
        this.abv = abv
        this.persons = persons
        this.cocktPerPers = cocktPerPers

        Calculator.all.push(this)

    }

    static create(id) {
      const cocktail = Cocktail.all.find(c => c.id == id)
      const cocktail_name = cocktail.name
      const filteredDoses = Dose.all.filter(dose => dose.cocktail_id == id && dose.ingredient.liquid === true)
     
        filteredDoses.forEach(dose => {
          const data = {
            cocktail: cocktail_name,
            dose: dose 
          }
          new Calculator(data)
        })

      Calculator.renderCalculatorForm()

    }

    static renderCalculatorForm() {
      
        Calculator.tableForm.innerHTML += `
    
        <tr>
          <th>Cocktail Name</th>
          <th>Ingredient Name</th>
          <th>Bottle volume</th>
          <th>Bottle price</th>
          <th>Alcohol by volume (ABV)</th>
        </tr> 
           
         `
         Calculator.all.forEach(c => {
           
            Calculator.tableForm.innerHTML += `
            
            <tr class ="dose-table-box">
              <td><input type="text" id='cockt-name-${c.dose.id}' value = "${c.cocktail}" ></td>
              <td><input type="text" id='cockingr-name-${c.dose.ingredient_id}' value = "${c.dose.ingredient.name}" ></td>
              <td><input type="number" id='volume-${c.dose.ingredient_id}'></td>
              <td><input type="number" id='price-${c.dose.ingredient_id}'></td>
              <td><input type="number" id='abv-${c.dose.ingredient_id}'></td>
            </tr>  
            `
        })

        Calculator.calculatorForm.innerHTML += `
        
      
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
    }
    
    static calculateParty() {
      
        Calculator.all.forEach(cdose => {
         
          cdose.volume = document.getElementById(`volume-${cdose.dose.ingredient_id}`).value
          cdose.price = document.getElementById(`price-${cdose.dose.ingredient_id}`).value
          cdose.abv = document.getElementById(`abv-${cdose.dose.ingredient_id}`).value
          cdose.persons = document.getElementById("persons").value
          cdose.cocktPerPers = document.getElementById("coct-by-pers").value
        })
              
        Calculator.renderResultData()
        
    }

    static totalBottles(cDose) { 
      
        const total = parseInt(cDose.dose.quantity) * parseInt(cDose.cocktPerPers) * parseInt(cDose.persons)
        const result = Math.ceil(total/parseInt(cDose.volume))
        
        return result

    }

    static totalPrise(cDose) {
      // debugger;
        const total_price = Calculator.totalBottles(cDose) * parseInt(cDose.price)
        return total_price
    }

    static costPerPerson(cDose) {
      // debugger;
        const cost_per_person = Calculator.totalPrise(cDose)/parseInt(cDose.persons)
        return cost_per_person
    }

    static renderResultData() {
        let total_price = 0
        let price_per_person = 0
        let cocktailName = Calculator.all[0].coctail

        
        Calculator.calculatorResult.innerHTML += ` 
        <tr>
          <th>Total of Bottles</th>
          <th>Total price</th>
          <th>Cost per person</th>
        </tr>
        `

        Calculator.all.forEach(cDose => {
        const ingrId =  cDose.dose.ingredient_id 
        const total_btl = Calculator.totalBottles(cDose)
        const total_prc = Calculator.totalPrise(cDose) 
        const cost_per_per = Calculator.costPerPerson(cDose)
        total_price += total_prc
        price_per_person += cost_per_per

        Calculator.calculatorResult.innerHTML += `
        <tr>
          <td id="total-bottles-${cDose.dose.ingredient_id}">result</td>
          <td id="total-price-${cDose.dose.ingredient_id}">result</td>
          <td id="cost-per-person-${cDose.dose.ingredient_id}">result</td>
        </tr>
        `
        Calculator.addOnDom(ingrId, total_btl, total_prc, cost_per_per)
        
        })
        setTimeout(() => { alert(`Full cost of the cocktail for the Party is: ${total_price} dollars! Price per person is: ${price_per_person} dollars. `);
      },2000)
          
    }

    static addOnDom(ingrId, total_btl, total_prc, cost_per_per) {
        const total_of_bottles = document.getElementById(`total-bottles-${ingrId}`)
        const total_price = document.getElementById(`total-price-${ingrId}`)
        const cost_per_pers = document.getElementById(`cost-per-person-${ingrId}`)
        total_of_bottles.innerHTML = total_btl
        total_price.innerHTML = total_prc
        cost_per_pers.innerHTML = cost_per_per

    }

    static addIngrsToCalculator(doses) {
        const dropDownIngr  = document.getElementById("ing-calc-name")

        doses.forEach(dose => {
         dropDownIngr.innerHTML += `
             <option id="exist-ingr-${dose.id}">
             ${dose.ingredient.name}
             </option>
         `
        })
         
     }

}