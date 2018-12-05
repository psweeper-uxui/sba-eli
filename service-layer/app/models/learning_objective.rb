class LearningObjective < ApplicationRecord
  self.table_name = "context_modules"

  acts_as_taggable_on :duration
end
