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

require 'rails_helper'

describe OauthState, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
