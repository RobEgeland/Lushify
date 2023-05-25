class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :pickup_id
      t.string :description
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
