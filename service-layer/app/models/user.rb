class User < ApplicationRecord

  validates :first_name,
            :last_name,
            :email,
            presence: true

  validates :email, email: true
end
