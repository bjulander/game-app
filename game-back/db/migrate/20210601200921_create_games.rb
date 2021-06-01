class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :user
      t.integer :score
      t.string :time

      t.timestamps
    end
  end
end
