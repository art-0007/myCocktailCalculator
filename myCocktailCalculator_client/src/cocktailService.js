// make all service calls regarding a contact object

class CocktailService{

    constructor(endpoint) {
        this.endpoint =  endpoint
    }

    // 1: Read/Index action

    getCocktails() {
        fetch(`${this.endpoint}/cocktails`)
        .then(resp => resp.json())
        .then(cocktails => {
            for (const cocktail of cocktails) {
                const c = new Cocktail(cocktail)
                c.slapOnDom()
            } 
        })
    }

     static goBack() {
        location.reload(); 
     }


    createCocktail() {
        const cocktail = {
            name: document.querySelector("#cocktail-name").value,
            description: document.getElementById("cocktail-description").value,
            img: document.getElementById("cocktail-image").value     
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cocktail)
        }

        fetch(`${this.endpoint}/cocktails`, configObj)
        .then(resp => resp.json())
        .then(cocktail => {
            const c = new Cocktail(cocktail)
            c.slapOnDom()
        })  
    }

    updateCocktail() {
        
        const id = document.getElementById("costail-update-Id").value
        const cocktail = {
            name: document.querySelector("#cocktail-update-name").value,
            description: document.getElementById("cocktail-update-description").value,
            img: document.getElementById("cocktail-update-image").value     
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cocktail)
        }

        fetch(`${this.endpoint}/cocktails/${id}`, configObj)
        .then(resp => resp.json())
        .then(cocktail => {
            const c = new Cocktail(cocktail)
            c.slapOnDom()
        })  
    }



    deleteCocktail(id) {
        fetch(`${this.endpoint}/cocktails/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json =>{alert(json.message)
        Cocktail.cocktailsContainerClear()
        location.reload();
        })
        
    }
    

}