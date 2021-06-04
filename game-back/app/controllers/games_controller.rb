class GamesController < ApplicationController

    def index
        render json: Game.all
    end

    def create
        name = params[:game][:user]
        game = Game.new(user: name)
        game.save
        render json: game
    end

end
