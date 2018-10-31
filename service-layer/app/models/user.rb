class User < ApplicationRecord

  validates :user_id, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true

end
