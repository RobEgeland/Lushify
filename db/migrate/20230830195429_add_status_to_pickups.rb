class AddStatusToPickups < ActiveRecord::Migration[7.0]
  def change
    add_column :pickups, :status, :string, default: "Order Recieved"
  end
end
