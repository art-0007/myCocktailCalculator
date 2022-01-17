class CreateDoses < ActiveRecord::Migration[6.1]
  def change
    create_table :doses do |t|
      t.string :quantity
      t.integer :cocktail_id
      t.integer :ingredient_id

      t.timestamps
    end
    add_index :doses, :cocktail_id
    add_index :doses, :ingredient_id
  end
end
