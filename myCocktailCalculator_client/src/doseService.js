class DoseService {

    constructor(endpoint) {
        this.endpoint =  endpoint
    }  


    getDoses() {
        fetch(`${this.endpoint}/doses`)
        .then(resp => resp.json())
        .then(doses => {
            for (const dose of doses) {
                const d = new Dose(dose)
            } 
        })
    }

    createDose() {
        let liquid = false
        let ingId = ""
        if (document.getElementById("liquid-true").checked === true) {
            liquid = true}
        let ingName = document.getElementById("ingredients-dropdown").value
        if (ingName != "") {
            ingId = Ingredient.all.find(i => i.name === ingName).id
        }
        
        const dose = {
            quantity: document.getElementById("dose-quantity").value,
            cocktail_id: document.getElementById("ingrs-cocktail-Id").value,
            ingredient_id: ingId,
            ingredient_name: document.getElementById("ingredient-name").value,
            liquid: liquid   
        }
        
        const configObj = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dose)
        }

        fetch(`${this.endpoint}/doses`, configObj)
        .then(resp => resp.json())
        .then(dose => {
            const d = new Dose(dose)
        })  
    }



}