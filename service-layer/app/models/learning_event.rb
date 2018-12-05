class LearningEvent < ApplicationRecord
  self.table_name = "content_tags"

  acts_as_taggable_on :duration
end
