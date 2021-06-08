class IngredientsController < ApplicationController

    def index
        render json: Ingredient.all, include: [choices: {only: [:name]}]
    end

end
