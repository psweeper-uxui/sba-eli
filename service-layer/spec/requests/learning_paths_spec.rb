require "rails_helper"

describe "LearningPaths" do
  describe "GET /learning_paths" do
    it "gets a list of all courses" do
      # stub_request(:get, ENV["CANVAS_HOST"] + "/api/v1/courses").to_return(status: 200, body: "")
      # stub_request(:get, ENV["CANVAS_HOST"] + "/api/v1/courses").to_rack(FakeCanvas)
      get "/learning_paths"

      expect(response).to be_successful

    end
  end
end
