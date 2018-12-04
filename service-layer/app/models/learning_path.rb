class LearningPath < ApplicationRecord
  self.table_name = "courses"

  acts_as_taggable_on :subjects
end
