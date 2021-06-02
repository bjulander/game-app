class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :bread
      t.string :cheese
      t.text :meats  
      t.text :basics
      t.text :extras
      t.text :condiments

      t.timestamps
    end
  end
end
