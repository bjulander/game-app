class CreateChoices < ActiveRecord::Migration[6.1]
  def change
    create_table :choices do |t|
      t.string :name
      t.integer :ingredient_id

      t.timestamps
    end
  end
end
