class CreatePickups < ActiveRecord::Migration[7.0]
  def change
    create_table :pickups do |t|
      t.string :customer_first_name
      t.string :customer_last_name
      t.string :customer_email
      t.string :customer_phone
      t.text :order_message
      t.date :order_date
      t.float :grand_total
      t.timestamps
    end
  end
end
