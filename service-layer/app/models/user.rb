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

class User

  attr_accessor :id,
                :name,
                :sortable_name,
                :short_name,
                :login_id


  def locale=(value)
    @locale=value
  end

  def locale
    @locale
  end

  class << self
    def from_canvas_json(json)
      user = User.new
      user.id = json["id"]
      user.name = json["name"]
      user.sortable_name = json["sortable_name"]
      user.short_name = json["short_name"]
      user.login_id = json["login_id"]
      user
    end
  end

end
