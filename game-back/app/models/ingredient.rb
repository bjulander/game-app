class Ingredient < ApplicationRecord
    has_many :sandwiches
    has_many :choices
end
