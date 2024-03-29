# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_30_195507) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "deliveries", force: :cascade do |t|
    t.string "customer_first_name"
    t.string "customer_last_name"
    t.string "customer_email"
    t.string "customer_phone"
    t.text "order_message"
    t.date "order_date"
    t.float "grand_total"
    t.boolean "am_delivery"
    t.string "recipient_first_name"
    t.string "recipient_last_name"
    t.string "recipient_phone"
    t.string "address_type"
    t.string "company_name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "postal_code"
    t.float "delivery_charge"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "Order Recieved"
  end

  create_table "delivery_products", force: :cascade do |t|
    t.integer "delivery_id"
    t.string "description"
    t.float "price"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pickups", force: :cascade do |t|
    t.string "customer_first_name"
    t.string "customer_last_name"
    t.string "customer_email"
    t.string "customer_phone"
    t.text "order_message"
    t.date "order_date"
    t.float "grand_total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "Order Recieved"
  end

  create_table "products", force: :cascade do |t|
    t.integer "pickup_id"
    t.string "description"
    t.float "price"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "business_name"
    t.string "email"
    t.string "password_digest"
    t.string "city"
    t.string "state"
    t.string "postal_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
