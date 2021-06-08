class Sandwich < ApplicationRecord
    belongs_to :game
    has_many :ingredients
end
