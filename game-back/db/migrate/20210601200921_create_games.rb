class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :user
      t.integer :score, default: 0

      t.timestamps
    end
  end
end
