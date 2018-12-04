require "rails_helper"

describe "Canvas::LearningPath" do
  include Mocks::LearningPathHelper

  describe "#all" do
    it "gets a list of all the courses" do
      stub_fetch_all_learning_paths
      expect(Canvas::LearningPath.all.length).to eq(2)
    end
  end

  describe "#find" do
    it "finds a course" do
    end
  end
end
