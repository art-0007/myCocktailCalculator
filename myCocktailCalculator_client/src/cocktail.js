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
                <div>
                    <h3>${this.name}</h3>
                    <img src="${this.img}" alt="${this.name}" width="100" height="100">
                    <p>${this.description}</p>   
                </div>
                <button id='delete-bttn'>Delete</button>
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

        handleClick = () => {
            if (event.target.innerText === "Delete") {
                cocktailService.deleteCocktail(this.id)
            }
        }


    
}