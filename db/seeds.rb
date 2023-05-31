# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Pickup.create({
    customer_first_name: "Rob",
    customer_last_name: "Egeland",
    customer_email: "robegeland@yahoo.com",
    customer_phone: "847-563-0762",
    order_message: "Thinking of you during this time",
    order_date: "2023-06-01",
    grand_total: 18.00,
    products: [{description: "roses", price: "1.50", quantity: "12"}]
})

Pickup.create({
    customer_first_name: "Glen",
    customer_last_name: "Egeland",
    customer_email: "glenegeland@yahoo.com",
    customer_phone: "847-563-0760",
    order_message: "Happy Birthday",
    order_date: "2023-06-01",
    grand_total: 24.00,
    products: [{description: "tulips", price: "2.00", quantity: "12"}]
})

Pickup.create({
    customer_first_name: "Kyle",
    customer_last_name: "Anderson",
    customer_email: "kyleA@gamil.com",
    customer_phone: "847-658-4215",
    order_message: "Happy Birthday Annie",
    order_date: "2023-06-01",
    grand_total: 42.00,
    products: [{description: "tulips", price: "2.00", quantity: "12"}, {description: "roses", price: "1.50", quantity: "12"}]
})

Delivery.create({
    customer_first_name: "Rob",
    customer_last_name: "Egeland",
    customer_email: "robegeland@yahoo.com",
    customer_phone: "847-563-0762",
    order_message: "Thinking of you during this time",
    order_date: "2023-06-01",
    grand_total: 18.00,
    products: [{description: "roses", price: "1.50", quantity: "12"}],
    am_delivery: true,
    recipient_first_name: "Kyle",
    recipient_last_name: "Anderson",
    recipient_phone: "847-561-7826",
    address_type: "Home",
    company_name: ,
    address: "300 A I Oka Ave",
    city: "Mount Prospect",
    state: "IL",
    postal_code:  60056,
    delivery_charge: 10.00
})

Delivery.create({
    customer_first_name: "Glen",
    customer_last_name: "Egeland",
    customer_email: "glenegeland@yahoo.com",
    customer_phone: "847-563-0760",
    order_message: "Thinking of you during this time",
    order_date: "2023-06-01",
    grand_total: 42.00,
    products: [{description: "roses", price: "1.50", quantity: "12"}, {description: "tulips", price: "2.00", quantity: "12"}],
    am_delivery: false,
    recipient_first_name: "Rob",
    recipient_last_name: "Egeland",
    recipient_phone: "847-561-7826",
    address_type: "Home",
    company_name: ,
    address: "25 Duxbury lane",
    city: "Cary",
    state: "IL",
    postal_code:  60013,
    delivery_charge: 10.00
})