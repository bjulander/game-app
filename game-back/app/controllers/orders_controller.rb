class OrdersController < ApplicationController

    def index
        render json: Order.order('RANDOM()').first
    end
    
end
