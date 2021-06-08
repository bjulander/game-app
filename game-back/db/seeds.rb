# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Game.create(user: "Blake", score: 3)
# Game.create(user: "Ryli", score: 7)
# Game.create(user: "Collins", score: 5)

Order.create(name: "Italian", bread: "Squaw", cheese: "Pepper Jack", meat: "Salami, Pepperoni, Ham", basics: "Spinach, Tomato, Onion, Pickle", condiments: "Mayo, Mustard")
Order.create(name: "Turkey", bread: "Wheat", cheese: "Provolone", meat: "Turkey", basics: "Spinach, Tomato, Pickles", condiments: "Mayo")
Order.create(name: "Club", bread: "White", cheese: "Muenster", meat: "Ham, Turkey", basics: "Spinach, Tomato", condiments: "Mayo, Mustard")

Sandwich.create(name: "Italian", game_id: 1)
Sandwich.create(name: "Turkey", game_id: 1)
Sandwich.create(name: "Club", game_id: 1)

#<---Italian--->
Ingredient.create(name: "Bread", sandwich_id: 1)
Ingredient.create(name: "Meat", sandwich_id: 1)
Ingredient.create(name: "Cheese", sandwich_id: 1)
Ingredient.create(name: "Condiments", sandwich_id: 1)
Ingredient.create(name: "Basics", sandwich_id: 1)

# #<---Turkey--->
# Ingredient.create(name: "Bread", sandwich_id: 2)
# Ingredient.create(name: "Meat", sandwich_id: 2)
# Ingredient.create(name: "Cheese", sandwich_id: 2)
# Ingredient.create(name: "Condiments", sandwich_id: 2)
# Ingredient.create(name: "Basics", sandwich_id: 2)

# #<---Club--->
# Ingredient.create(name: "Bread", sandwich_id: 3)
# Ingredient.create(name: "Meat", sandwich_id: 3)
# Ingredient.create(name: "Cheese", sandwich_id: 3)
# Ingredient.create(name: "Condiments", sandwich_id: 3)
# Ingredient.create(name: "Basics", sandwich_id: 3)

#<---Bread--->
Choice.create(name: "White", ingredient_id: 1)
Choice.create(name: "Wheat", ingredient_id: 1)
Choice.create(name: "Squaw", ingredient_id: 1)
Choice.create(name: "Pumpernickel", ingredient_id: 1)
#<---Meat--->
Choice.create(name: "Turkey", ingredient_id: 2)
Choice.create(name: "Ham", ingredient_id: 2)
Choice.create(name: "Pepperoni", ingredient_id: 2)
Choice.create(name: "Salami", ingredient_id: 2)
Choice.create(name: "Tuna", ingredient_id: 2)
Choice.create(name: "Vegetarian", ingredient_id: 2)
#<---Cheese--->
Choice.create(name: "Pepper Jack", ingredient_id: 3)
Choice.create(name: "Cheddar", ingredient_id: 3)
Choice.create(name: "Provolone", ingredient_id: 3)
Choice.create(name: "Havarti", ingredient_id: 3)
Choice.create(name: "Muenster", ingredient_id: 3)
Choice.create(name: "None", ingredient_id: 3)
#<---Basics--->
Choice.create(name: "Spinach", ingredient_id: 4)
Choice.create(name: "Tomato", ingredient_id: 4)
Choice.create(name: "Onion", ingredient_id: 4)
Choice.create(name: "Pickle", ingredient_id: 4)
Choice.create(name: "Plain", ingredient_id: 4)
#<---Condiments--->
Choice.create(name: "Mayo", ingredient_id: 5)
Choice.create(name: "Mustard", ingredient_id: 5)
Choice.create(name: "Oil & Vinegar", ingredient_id: 5)
Choice.create(name: "Sriracha", ingredient_id: 5)
Choice.create(name: "Dry", ingredient_id: 5)
