class CreateGameOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :game_orders do |t|
      t.string :bread
      t.string :cheese
      t.text :meats  
      t.text :basics
      t.text :extras
      t.text :condiments
      t.integer :game_id
      t.integer :order_id

      t.timestamps
    end
  end
end
