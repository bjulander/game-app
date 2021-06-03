class CreateGameOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :game_orders do |t|
      t.belongs_to :game
      t.belongs_to :order

      t.timestamps
    end
  end
end
