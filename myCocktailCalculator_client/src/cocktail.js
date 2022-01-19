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
                    <img data-id=${this.id} class="cocktail-img" src="${this.img}" alt="${this.name}" width="100" height="100">
                    <p>${this.description}</p>   
                </div>
                <button id='delete-bttn'>Delete</button>
                <br>
                <br>
            `
            const cocktailImgs = document.getElementsByClassName("cocktail-img")
            for (const img of cocktailImgs) {
                img.addEventListener('click', cocktailService.cocktailShow)
            }

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


        handleClick = () => {
            if (event.target.innerText === "Delete") {
                cocktailService.deleteCocktail(this.id)
            }
        }


    
}