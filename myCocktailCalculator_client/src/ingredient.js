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




}


