class CreateCocktails < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.string :description
      t.string :img

      t.timestamps
    end
  end
end
