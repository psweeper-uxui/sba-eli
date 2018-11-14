# == Schema Information
#
# Table name: oauth_states
#
#  id         :bigint(8)        not null, primary key
#  state      :string
#  payload    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_oauth_states_on_state  (state)
#

class OauthState < ApplicationRecord
  validates :state, presence: true, uniqueness: true
end
