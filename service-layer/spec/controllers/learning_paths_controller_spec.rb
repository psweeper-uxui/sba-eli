require 'rails_helper'

RSpec.describe LearningPathsController, type: :controller do
  describe "GET /learning_paths" do
    it "renders a json of all of the learning paths" do
      get :index

      json_response = JSON.parse(response.body)
      expect(response).to be_successful
      # expect(json_response["name"]).to eq("Avengers")
    end
  end

  describe "GET /learning_paths/:id" do
    it "renders json for one learning path" do
      get :show, id: 1

      json_response = JSON.parse(response.body)
      expect(response).to be_successful
      expect(json_response["name"]).to eq("Avengers")
    end
  end
end
