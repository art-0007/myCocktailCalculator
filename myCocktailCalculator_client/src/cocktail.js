class Cocktail {
    // remember object
    static all = []
    static cocktailsContainer = document.getElementById("cocktails-container")
    static cocktailForm = document.getElementById("new-cocktail-form")
    
    

    constructor({id, name, description, img}) {
        this.id = id
        this.name = name
        this.description = description
        this.img = img

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `cocktail-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Cocktail.all.push(this)

    }

        cocktailHTML() {
            this.element.innerHTML += `
                <div class="center">
                    <h3>${this.name}</h3>
                    <img data-id=${this.id} class="cocktail-img" src="${this.img}" alt="${this.name}" width="100" height="100">
                    <p>${this.description}</p>   
                
                <button id='delete-bttn'>Delete</button>
                </div>
                <br>
                <br>
            `
            return this.element   
        }


        slapOnDom() {
            Cocktail.cocktailsContainer.append(this.cocktailHTML())
        }

        static renderForm() {
            Cocktail.cocktailForm.innerHTML += `
        <h1>New Cocktail Form</h1>
        
        <section>
            <h2>Cocktail information</h2>
            <fieldset>
            Name: <input type="text" id="cocktail-name"><br><br>
            Description: <input type="text" id="cocktail-description"><br><br>
            Image: <input type="url" id="cocktail-image"><br><br>
              
            </fieldset>
            
        </section>

        <section>
            <p> <button type="submit">Create Cocktail</button> </p>
        </section>

            `
        }

        static cocktailsContainerClear() {
            Cocktail.cocktailsContainer.innerHTML = ''
        }

        static cocktailFormClear() {
            Cocktail.cocktailForm.innerHTML = ''
        }

        static renderCocktail(cocktail) {
    
            Cocktail.cocktailsContainer.innerHTML += `
                <div class="center">
                    <h1>${cocktail.name}</h1>
                    <img data-id=${cocktail.id} class="cocktail-img" src="${cocktail.img}" alt="${cocktail.name}" width="400" height="400">
                    <p>${cocktail.description}</p>   
                </div>
            `
            Cocktail.renderIngredients(cocktail)
        }

        static renderIngredients(cocktail) {
        
            cocktail.doses.forEach(d => {
                Cocktail.cocktailsContainer.innerHTML += `
                <li>
                <h4>${d.quantity} (action/ml) of ${Ingredient.all.find(i => i.id === d.ingredient_id).name} </h4>
                </li>
                `    
            })

            // Ingredient.renderNewIngrForm(cocktail)
        }

        


        handleClick = () => {
            //debugger;
            if (event.target.innerText === "Delete") {
                cocktailService.deleteCocktail(this.id)
            } else if (event.target.className === "cocktail-img") {
                // debugger;
                // this.cocktailShow()
                cocktailService.cocktailShow(this.id)
            }
        }


    
}