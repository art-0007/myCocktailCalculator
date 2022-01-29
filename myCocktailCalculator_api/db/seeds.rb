# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


whiskey = Ingredient.create(name: 'whiskey', liquid: true)
rum = Ingredient.create(name: 'rum', liquid: true)
vodka = Ingredient.create(name: 'vodka', liquid: true)
cranberry_juice = Ingredient.create(name: 'cranberry juice', liquid: true)
rosso_vermouth = Ingredient.create(name: 'rosso vermouth', liquid: true)
gin = Ingredient.create(name: 'gin', liquid: false)
coffee = Ingredient.create(name: 'coffee', liquid: true)
coffee_liqueur = Ingredient.create(name: 'coffee liqueur', liquid: true)
irish_cream_liqueur = Ingredient.create(name: 'irish cream liqueur', liquid: true)
lemon = Ingredient.create(name: 'lemon', liquid: false)
orange = Ingredient.create(name: 'orange', liquid: false)
pink_rhubarb_stalks = Ingredient.create(name: 'pink rhubarb stalks', liquid: false)
red_wine = Ingredient.create(name: 'red wine', liquid: true)
spanish_brandy = Ingredient.create(name: 'spanish brandy', liquid: true)
sparkling_water = Ingredient.create(name: 'sparkling water', liquid: true)

mojito = Cocktail.create({name: 'Mojito', description: 'Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste.', img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg?quality=90&resize=430,390"})
sex_on_the_beach = Cocktail.create({name: 'Sex on the beach cocktail', description: 'Combine vodka with peach schnapps and cranberry juice to make a classic sex on the beach cocktail. Garnish with cocktail cherries and orange slices.', img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sex_on_the_beach-621ae6e.jpg?quality=90&resize=440,400"})
rhubarb_gin = Cocktail.create({name: 'Rhubarb gin', description: 'Use seasonal rhubarb to make this G&T-with-a-difference, or top the finished gin with soda water for a refreshing and gloriously pink summertime drink.', img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/rhubarb-gin-93e56de.jpg?quality=90&resize=440,400"})
espresso_martini = Cocktail.create({name: 'Espresso martini', description: 'Learn how to make this classic coffee cocktail. Our easy recipe uses freshly brewed espresso, a dash of coffee liqueur and a simple sugar syrup.', img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/espresso-martini-f099531.jpg?quality=90&resize=440,400"})
easy_sangria = Cocktail.create({name: 'Easy sangria', description: 'Embrace balmy summer days with a jug of sangria. With red wine, Spanish brandy, sparkling water, cinnamon and chopped fruit, it is a lovely sharing cocktail.',img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sangria-new-crop-8fbb7a1.jpg?quality=90&resize=440,400"})
mudslide = Cocktail.create({name: 'Mudslide', description: 'Share this creamy adults-only drink with the chocolate lover in your life. For extra indulgence, grate over some chocolate before serving.', img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mudslide-b38f145.jpg?quality=90&resize=440,400"})
sweet_manhattan = Cocktail.create({name: 'Sweet manhattan cocktail', description: 'If you are a whiskey lover, you all love this sweet manhattan, made with whiskey, vermouth and bitters. Serve with a maraschino cherry and a twist of lemon.', img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/manhattan-cocktail-4d775c9.jpg?quality=90&webp=true&resize=440,400"})



Dose.create ([
    {quantity: 'juice of 1 lime', cocktail_id: mojito.id, ingredient_id: lemon.id},
    {quantity: '60', cocktail_id: mojito.id, ingredient_id: rum.id},
    {quantity: '50', cocktail_id: sex_on_the_beach.id, ingredient_id: vodka.id},
    {quantity: '2 oranges, juiced', cocktail_id: sex_on_the_beach.id, ingredient_id: orange.id},
    {quantity: '50', cocktail_id: sex_on_the_beach.id, ingredient_id: cranberry_juice.id},
    {quantity: '1 kg', cocktail_id: rhubarb_gin.id, ingredient_id: pink_rhubarb_stalks.id},
    {quantity: '800', cocktail_id: rhubarb_gin.id, ingredient_id: gin.id},
    {quantity: '100', cocktail_id: espresso_martini.id, ingredient_id: vodka.id},
    {quantity: '50', cocktail_id: espresso_martini.id, ingredient_id: coffee.id},
    {quantity: '50', cocktail_id: espresso_martini.id, ingredient_id: coffee_liqueur.id},
    {quantity: '2 oranges , chopped', cocktail_id: easy_sangria.id, ingredient_id: orange.id},
    {quantity: '2 lemons , 1 chopped, 1 juiced', cocktail_id: easy_sangria.id, ingredient_id: lemon.id},
    {quantity: '750', cocktail_id: easy_sangria.id, ingredient_id: red_wine.id},
    {quantity: '100', cocktail_id: easy_sangria.id, ingredient_id: spanish_brandy.id},
    {quantity: '300', cocktail_id: easy_sangria.id, ingredient_id: sparkling_water.id},
    {quantity: '60', cocktail_id: mudslide.id, ingredient_id: vodka.id},
    {quantity: '60', cocktail_id: mudslide.id, ingredient_id: coffee_liqueur.id},
    {quantity: '60', cocktail_id: mudslide.id, ingredient_id: irish_cream_liqueur.id},
    {quantity: '25', cocktail_id: sweet_manhattan.id, ingredient_id: rosso_vermouth.id},
    {quantity: '50', cocktail_id: sweet_manhattan.id, ingredient_id: whiskey.id}
])

