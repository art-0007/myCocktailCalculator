// any global variables
const base_url = "http://127.0.0.1:3000"
const cocktailService = new CocktailService(base_url)
const doseService = new DoseService(base_url)
const ingredientService = new IngredientService(base_url)


// any initializations of the application

 Cocktail.cocktailForm.addEventListener('submit', handleSubmit)
 

 
    cocktailService.getCocktails()
    Cocktail.renderForm()

    doseService.getDoses()

    ingredientService.getIngredients()


    function handleSubmit() {
         event.preventDefault()
         cocktailService.createCocktail()
         event.target.reset()
    }
