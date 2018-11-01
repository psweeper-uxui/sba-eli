class User < ApplicationRecord

  validates :user_id, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  def full_name
    return "#{first_name} #{last_name}"
  end
end
