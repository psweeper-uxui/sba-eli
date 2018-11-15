require "faker"

FactoryBot.define do
  factory :user do
    user_id { Faker::Number.unique.number(10) }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    profile_picture { Faker::LoremFlickr.image("50x60") }
    linked_in { Faker::Internet.url }
    zipcode { Faker::Address.zip_code }
    percent_ownership { Faker::Number.between(1, 100) }
    goal_percent_revenue { Faker::Number.between(1, 100) }
    goal_revenue_amount { Faker::Number.positive }
    goal_percent_increase_employees { Faker::Number.between(1, 100) }
    goal_increase_employee_amount { Faker::Number.positive }
  end
end
