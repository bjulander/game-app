class CreateSandwiches < ActiveRecord::Migration[6.1]
  def change
    create_table :sandwiches do |t|
      t.string :name
      t.string :bread
      t.string :cheese
      t.text :meats  
      t.text :basics
      t.text :extras
      t.text :condiments
      t.belongs_to :game
      t.belongs_to :order

      t.timestamps
    end
  end
end
