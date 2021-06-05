# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Game.create(user: "Blake", score: 0)
# Game.create(user: "Ryli", score: 7, time: "1:20")
# Game.create(user: "Collins", score: 5, time: "1:00")

Order.create(name: "Italian", bread: "Squaw", cheese: "Pepper Jack", meats: "Salami, Pepperoni, Ham", basics: "Lettuce, Tomato, Onion, Pickles", extras: "Olives, Sprouts, Bell Pepper", condiments: "Mayo, Mustard")
Order.create(name: "Turkey", bread: "Wheat", cheese: "Provolone", meats: "Turkey", basics: "Lettuce, Tomato, Pickles", extras: "Sprouts", condiments: "Mayo")
Order.create(name: "Club", bread: "White", cheese: "American", meats: "Ham, Turkey", basics: "Lettuce, Tomato", extras: "Olives", condiments: "Mayo, Mustard")

GameOrder.create(game_id: 1, order_id: 1)
GameOrder.create(game_id: 1, order_id: 2)
GameOrder.create(game_id: 1, order_id: 3)

Sandwich.create(breads: [], meats: [], )