class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :bread
      t.string :meat
      t.string :cheese
      t.string :basics
      t.string :condiments

      t.timestamps
    end
  end
end