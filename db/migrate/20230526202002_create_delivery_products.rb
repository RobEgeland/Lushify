class CreateDeliveryProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :delivery_products do |t|
      t.integer :delivery_id
      t.string :description
      t.float :price
      t.integer :quantity
      t.timestamps
    end
  end
end
