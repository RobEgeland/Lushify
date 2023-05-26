class CreateDeliveries < ActiveRecord::Migration[7.0]
  def change
    create_table :deliveries do |t|
      t.string :customer_first_name
      t.string :customer_last_name
      t.string :customer_email
      t.string :customer_phone
      t.text :order_message
      t.date :order_date
      t.float :grand_total
      t.boolean :am_delivery
      t.string :recipient_first_name
      t.string :recipient_last_name
      t.string :recipient_phone
      t.string :address_type
      t.string :company_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :postal_code
      t.float :delivery_charge

      t.timestamps
    end
  end
end
