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

    // createCocktail() {
    //     const cocktail = {
    //         name: document.querySelector("#cocktail-name").value,
    //         description: document.getElementById("cocktail-description").value,
    //         img: document.getElementById("cocktail-image").value     
    //     }

    //     const configObj = {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(cocktail)
    //     }

    //     fetch(`${this.endpoint}/cocktails`, configObj)
    //     .then(resp => resp.json())
    //     .then(cocktail => {
    //         const c = new Cocktail(cocktail)
    //         c.slapOnDom()
    //     })  
    // }



}