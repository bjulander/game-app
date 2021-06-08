class OrdersController < ApplicationController

    def index
        orders = Order.order('RANDOM()')
        render json: orders.first
    end
    
end
