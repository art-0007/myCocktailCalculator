# myCocktailCalculator
Description
This is a small Single Page Application (SPA) for Cocktails calculate. Here you can create coctail, choose ingredients and calculate how many drings you need for your party. Also you can be able to calculate the Average ABV of your coctail. You can calculate total amount cost of your drings and split it for all person of party.

The setups steps expect following tools installed on the system.
Github
Ruby 2.6.1
Rails 6.1.4
Javascript ES2015

Database Associations

Cocktails 

Has Many Doses 
Has Many Ingredients Through Doses

Doses

Belongs to Cocktail
Belongs to Ingredient

Ingredients

Has Many Doses
Has Many Cocktails Through Doses


Installation Instructions
git clone

bundle install

rake db:migrate

Run rake db:seed

rails s

And now you can visit the site with the 'open index.html' command from myCocktailCalculator_client dirrectory

How to use Program

Once open the main page you can see all Cocktail collection.

You can create new Cocktail by click create Cocktail buttom.

If you click by Cocktail image you can see Coctail show page with all list of ingredients

You can also be able to calculate Cocktail for your party by fill form below and submit.

Contributions
Bug reports and pull requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

License
The repo is available as open source under the terms of the MIT License.
