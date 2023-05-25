class Pickup < ApplicationRecord
    has_many :products
    validates :customer_first_name, presence: true
    validates :customer_last_name, presence: true
    validates :customer_email, presence: true
    validates :customer_phone, presence: true
    validates :order_date, presence: true
end
