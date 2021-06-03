class GameOrdersController < ApplicationController

    def index
        render json: GameOrder.all
    end

    def create
        game_order = GameOrder.create
        render json: game_order
    end

end
