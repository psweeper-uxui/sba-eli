class Company < ApplicationRecord

  validates :name, presence: true
  validates :industry
  validates :naics
  has_many :users

end