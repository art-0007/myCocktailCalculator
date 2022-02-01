class Calculator {
    static all = []
    static calculatorForm = document.getElementById("calculator-form")
    static tableForm = document.getElementById("calculator-table")
    static calculatorContainer = document.getElementById("calculator-container")
    static calculatorResult = document.getElementById("calculator-result")


    constructor({id, cocktail, dose, volume=500, price=0, abv=0, persons=1, cocktPerPers=1}) {
        this.id = id
        this.cocktail = cocktail
        this.dose = dose
        this.volume = volume
        this.price = price
        this.abv = abv
        this.persons = persons
        this.cocktPerPers = cocktPerPers

        this.element = document.createElement('tr')
        this.element.dataset.id = this.id
        this.element.id = `dose-table-row-${this.id}`

        this.totalBottles = function totalBottles() {
          const total = parseInt(this.dose.quantity) * parseInt(this.cocktPerPers) * parseInt(this.persons)
          const result = Math.ceil(total/parseInt(this.volume))
          return result   
        }

        this.totalPrice = function totalPrice() {
          const total_price = this.totalBottles() * parseInt(this.price)
          return total_price  
        }

        this.costPerPerson = function costPerPerson() {
          const cost_per_person = this.totalPrice()/parseInt(this.persons)
          return cost_per_person   
        }

        this.avrABV = function avrABV() {
          const average_abv = parseInt(this.dose.quantity) * parseInt(this.abv)/100
          return average_abv   
        }

        Calculator.all.push(this)

    }

    static create() {
     
      Calculator.all =[]
      const filteredDoses = Dose.all.filter(dose => dose.cocktail_id == this.id && dose.ingredient.liquid === true)
     
        filteredDoses.forEach(dose => {

          const data = {
            id: dose.id,
            cocktail: dose.cocktail.name,
            dose: dose 
          }
          new Calculator(data)
        })

    }

    static tableFormClear() {
      Calculator.tableForm.innerHTML = ''
    }

    calculatorFormHTML() {
         this.element.innerHTML += `
           <td><input type="text" id='cockt-name-${this.dose.id}' value = "${this.cocktail}" ></td>
           <td><input type="text" id='cockingr-name-${this.dose.ingredient_id}' value = "${this.dose.ingredient.name}" ></td>
           <td><input type="number" id='volume-${this.dose.ingredient_id}'></td>
           <td><input type="number" id='price-${this.dose.ingredient_id}'></td>
           <td><input type="number" id='abv-${this.dose.ingredient_id}'></td>
         `
         return this.element
    }

    slapCalculatorFormTableRow() {
      Calculator.tableForm.append(this.calculatorFormHTML())
    }

    static addCalcFormTableFirstRow() {
      Calculator.tableForm.innerHTML += `
    
        <tr>
          <th>Cocktail Name</th>
          <th>Ingredient Name</th>
          <th>Bottle volume</th>
          <th>Bottle price</th>
          <th>Alcohol by volume (ABV)</th>
        </tr> 
           
         `
    }

    static addCalcFormPartyInputRow () {
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

    static renderCalculatorForm() {
      Calculator.addCalcFormTableFirstRow()
      Calculator.all.forEach(dose => dose.slapCalculatorFormTableRow())
      Calculator.addCalcFormPartyInputRow()   
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

   static calculateResult() {
     
     const arr_of_prices = Calculator.all.map(dose => dose.totalPrice())
     const arr_of_prices_per_person = Calculator.all.map(dose => dose.costPerPerson())
     const average_abv = Calculator.all.map(dose => dose.avrABV())
     
      let total_price = arr_of_prices.reduce((prev,curr) => prev + curr)
      let price_per_person = arr_of_prices_per_person.reduce((prev,curr) => prev + curr)
      let cocktail_abv = average_abv.reduce((prev,curr) => prev + curr)/2.5
  
      
      setTimeout(() => { alert(`
      Full Party:
      Total number of people: ${Calculator.all[0].persons}
      Cocktails per person: ${Calculator.all[0].cocktPerPers}
      Full cost of the cocktail for the Party is: ${total_price} dollars! 
      Price per person is: ${price_per_person} dollars. 
      Alcohol by volume 250ml of the cocktail is: ${cocktail_abv}
      `);
      },2000)
    }

    static addFirstRowToCalcResultTable() {
      Calculator.calculatorResult.innerHTML += ` 
        <tr>
          <th>Total of Bottles</th>
          <th>Total price</th>
          <th>Cost per person</th>
        </tr>
        `
    }

    resultDoseHTML() {
      Calculator.calculatorResult.innerHTML += `
        <tr>
          <td id="total-bottles-${this.dose.ingredient_id}">${this.totalBottles()}</td>
          <td id="total-price-${this.dose.ingredient_id}">${this.totalPrice()}</td>
          <td id="cost-per-person-${this.dose.ingredient_id}">${this.costPerPerson()}</td>
        </tr>
        `
    }

    static renderResultData() {
      
      Calculator.addFirstRowToCalcResultTable()

      Calculator.all.forEach(dose => dose.resultDoseHTML())

      Calculator.calculateResult()
        
    }


}