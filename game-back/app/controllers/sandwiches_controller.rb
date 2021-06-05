class SandwichesController < ApplicationController

    def index
        render json: Sandwich.all
    end

    def create
        sandwhich = Sandwich.create
        render json: sandwhich
    end

end
