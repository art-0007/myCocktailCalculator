class Dose {
    static all = []
    static dosesContainer = document.getElementById("doses-container")
    static doseForm = document.getElementById("new-dose-form")

    constructor({id, quantity, cocktail_id, ingredient_id }) {
        this.id = id
        this.quantity = quantity
        this.cocktail_id = cocktail_id
        this.ingredient_id = ingredient_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `dose-${this.id}`
        this.element.addEventListener('click', this.handleDoseClick)

        Dose.all.push(this)

    }

}
