class User < ApplicationRecord
    has_secure_password
    validates :business_name, presence: :true
    validates :email, presence: :true
    validates :city, presence: :true 
    validates :postal_code, presence: :true
end
