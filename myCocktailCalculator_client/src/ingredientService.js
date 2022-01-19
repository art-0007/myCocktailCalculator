class IngredientService {

    constructor(endpoint) {
        this.endpoint =  endpoint
    }  


    getIngredients() {
        fetch(`${this.endpoint}/ingredients`)
        .then(resp => resp.json())
        .then(ingredients => {
            for (const ingredient of ingredients) {
                const i = new Ingredient(ingredient)
            } 
        })
    }





}