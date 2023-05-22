class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :business_name
      t.string :email
      t.string :password_digest
      t.string :city
      t.string :state
      t.string :postal_code
      t.timestamps
    end
  end
end
