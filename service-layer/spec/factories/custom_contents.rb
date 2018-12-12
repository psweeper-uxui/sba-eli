FactoryBot.define do
  factory :custom_content do
    contentable_type { "LearningPath" }
    contentable_type_id { 1 }
    content { "This is my example text" }
  end
end
