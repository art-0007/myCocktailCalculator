class Ingredient {
    static all = []
    static ingredientsContainer = document.getElementById("ingredients-container")
    static ingredientForm = document.getElementById("new-ingredient-form")

    constructor({id, name, liquid }) {
        this.id = id
        this.name = name
        this.liquid = liquid

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `ingredient-${this.id}`
        this.element.addEventListener('click', this.handleIngredientClick)

        Ingredient.all.push(this)

    }

    static NewIngrFormClear() {
      Ingredient.ingredientForm.innerHTML = ''
  }

   static renderNewIngrForm() {

        Ingredient.ingredientForm.innerHTML += `
        <section>
        <h2>New Ingredients</h2>
    <fieldset>
        <legend>Ingredient</legend>
        <p>
          <label for="existing ingredients">
            <span>Existing ingredients:</span>
          </label>
          <select id="ingredients-dropdown">
            <option></option>
          </select>
        </p>

        <p>
        <input type="hidden" id="ingrs-cocktail-Id" name="cocktail-Id" value=${this.id}>
        </p>

        <p>
            <label for="ingredient">
              <span>Ingredient name:</span>
            </label>
            <input type="text" id="ingredient-name" >
        </p>

        <p>
          <label for="dose">
            <span>Dose quantity:</span>
          </label>
          <input type="text" id="dose-quantity" name="quantity">
        </p>

        <p>
            <label for="liquid">
              <span>Choose if liquid:</span>
            </label><br>
            
            <input type="radio" id="liquid-true" name="liquid" value="true">
            <label for="true">Ingredient is liquid</label><br>
            
            <input type="radio" id="liquid-false" name="liquid" value="false" checked>
            <label for="false">Ingredient is not liquid</label><br>
          </p>
    </fieldset>

    </section>

    <section>
        <p> <button type="submit">Create Ingredient</button> </p>
    </section>
</form>
        `
        Ingredient.addIngrToDropdown()
    }


   static addIngrToDropdown() {
      debugger;
       const dropDownIngr  = document.getElementById("ingredients-dropdown")
       Ingredient.all.forEach(ing => {
        dropDownIngr.innerHTML += `
            <option id="exist-ingr-${ing.id}">
            ${ing.name}
            </option>
        `
       })
        
    }



}


