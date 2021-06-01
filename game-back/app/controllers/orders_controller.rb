class OrdersController < ApplicationController

    def index
        render json: Order.all
    end

    def create
        order = Order.create(order_params)
        render json: order
    end

    private 
    
    def order_params
        params.require(:order).permit(:id, :bread, :cheese, :meats, :basics, :extras, :condiments)
    end

end
