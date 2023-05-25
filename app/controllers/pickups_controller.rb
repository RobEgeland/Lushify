class PickupsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        pickups = Pickup.all
        render json: pickups, status: :ok
    end

    def show
        pickup = Pickup.find_by!(id: params[:id])
        render json: pickup, status: :ok
    end


    def create 
        pickup = Pickup.create!(pickup_params)
        puts pickup
        params[:products].each do |product|
            puts pickup.id
            Product.create!(description: product[:description], price: product[:price], quantity: product[:quantity], pickup_id: pickup.id)
        end
        render json: pickup, include: :products, status: :created
    end


    private 

    def pickup_params
        params.permit(:customer_first_name, :customer_last_name, :customer_email, :customer_phone, :order_message, :order_date, :products, :grand_total)
    end

    def render_invalid(invalid) 
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
