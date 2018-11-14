# == Schema Information
#
# Table name: users
#
#  id                              :bigint(8)        not null, primary key
#  user_id                         :string           not null
#  first_name                      :string
#  last_name                       :string
#  email                           :string
#  profile_picture                 :string
#  linked_in                       :string
#  zipcode                         :string
#  percent_ownership               :integer
#  goal_percent_revenue            :integer
#  goal_revenue_amount             :integer
#  goal_percent_increase_employees :integer
#  goal_increase_employee_amount   :integer
#  race_id                         :bigint(8)        is an Array
#  ethnicity_id                    :bigint(8)
#  companies_id                    :bigint(8)
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#
# Indexes
#
#  index_users_on_companies_id  (companies_id)
#  index_users_on_email         (email)
#  index_users_on_ethnicity_id  (ethnicity_id)
#  index_users_on_first_name    (first_name)
#  index_users_on_last_name     (last_name)
#  index_users_on_race_id       (race_id)
#  index_users_on_user_id       (user_id)
#

class User < ApplicationRecord

  validates :first_name,
            :last_name,
            :email,
            presence: true

  validates :email, email: true
end
