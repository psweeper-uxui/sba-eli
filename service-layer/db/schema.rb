# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_30_191653) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "profile_picture"
    t.string "linked_in"
    t.string "zipcode"
    t.integer "percent_ownership"
    t.integer "goal_percent_revenue"
    t.integer "goal_revenue_amount"
    t.integer "goal_percent_increase_employees"
    t.integer "goal_increase_employee_amount"
    t.bigint "race_id", array: true
    t.bigint "ethnicity_id"
    t.bigint "companies_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["companies_id"], name: "index_users_on_companies_id"
    t.index ["email"], name: "index_users_on_email"
    t.index ["ethnicity_id"], name: "index_users_on_ethnicity_id"
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["race_id"], name: "index_users_on_race_id"
    t.index ["user_id"], name: "index_users_on_user_id"
  end

  create_table "oauth_states", force: :cascade do |t|
    t.string "state"
    t.text "payload"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["state"], name: "index_oauth_states_on_state"
  end

end
