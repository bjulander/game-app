class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :bread
      t.string :cheese
      t.text :meat
      t.text :basics
      t.text :condiments

      t.timestamps
    end
  end
end
