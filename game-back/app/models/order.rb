class Order < ApplicationRecord
    has_many :sandwiches
    has_many :games, through: :sandwiches
end
