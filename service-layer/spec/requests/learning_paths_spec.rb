require "rails_helper"

describe "LearningPaths" do
  describe "GET /learning_paths" do
    it "gets a list of all courses" do
      get '/learning_paths'

      expect(response).to be_successful
    end
  end
end
