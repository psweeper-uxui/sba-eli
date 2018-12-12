module Contentable
  extend ActiveSupport::Concern

  included  do
    has_one :custom_content, as: :contentable, dependent: :destroy
  end
end
