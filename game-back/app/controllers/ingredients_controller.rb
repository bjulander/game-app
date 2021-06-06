class IngredientsController < ApplicationController

    def index
        Ingredient.all
        binding.pry
        render json: Ingredient.all
    end

    def show
        ingObj = Ingredient.last
        render json: ingObj
    end

end
