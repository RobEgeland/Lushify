class DeliveriesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def create 
        delivery = Delivery.create!(delivery_params)
        params[:products].each do |product|
            DeliveryProduct.create!(description: product[:description], price: product[:price], quantity: product[:quantity], delivery_id: delivery.id)
        end
        render json: delivery, include: :delivery_products, status: :created
    end

    def index 
        deliveries = Delivery.all
        render json: deliveries, include: :delivery_products, status: :ok
    end


    private

    def delivery_params
        params.permit(
            :customer_first_name, 
            :customer_last_name, 
            :customer_email, 
            :customer_phone, 
            :order_message, 
            :order_date, 
            :products, 
            :grand_total, 
            :am_delivery, 
            :recipient_first_name, 
            :recipient_last_name,
            :address_type,
            :company_name,
            :address,
            :city,
            :state,
            :postal_code,
            :recipient_phone,
            :delivery_charge
        )
    end

    def render_invalid(invalid) 
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
