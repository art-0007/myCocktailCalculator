class Calculator {
    static all = []
    static calculatorForm = document.getElementById("calculator-form")

    static renderCalculatorForm() {
        // debugger;
        Calculator.calculatorForm.innerHTML += `
    <table style="width:100%">
        <tr>
          <th>Ingredient Name</th>
          <th>Bottle volume</th>
          <th>Bottle price</th>
          <th>Alcohol by volume (ABV)</th>
        </tr>
        <tr>
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
    }  

}