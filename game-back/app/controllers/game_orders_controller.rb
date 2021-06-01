class GameOrdersController < ApplicationController

    def index
        render json: GameOrder.all
    end

    def create
        game_order = GameOrder.create(game_order_params)
        render json: game_order
    end

    private 
    
    def game_order_params
        params.require(:game_order).permit(:id, :bread, :cheese, :meats, :basics, :extras, :condiments, :game_id, :order_id)
    end

end
