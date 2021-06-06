class SandwichesController < ApplicationController

    def index
        render json: Ingredients.all
    end

    def create
        sandwhich = Sandwich.create
        render json: sandwhich
    end

end
