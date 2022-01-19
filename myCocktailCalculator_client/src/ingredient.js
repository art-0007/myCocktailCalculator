class Ingredient {

    static  renderIngredientForm() {
        Cocktail.cocktailForm.innerHTML += `
    <section form="new-cocktail-form">
    <h2>Ingredients</h2>
        <fieldset class='ingredient-forms'>
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
            </label>
            <input type="checkbox" id="ingredient-liquid" name="liquid">
          </p>
        </fieldset>
    
    </section>
        `
    }


}


