class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.boolean :liquid
      t.integer :category_id

      t.timestamps
    end
  end
end
