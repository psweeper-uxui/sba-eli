require 'rails_helper'

RSpec.describe LearningObjectivesController, type: :controller do
    describe "GET /learning_event" do
        it "renders json of all of the learning events" do
            get :index

            json_response = JSON.parse(response.body)
            expect(response).to be_successful
        end
    end

    describe "GET /learning_event/:id" do
        it "renders json for one learning path" do
          get :show, id: 1
           json_response = JSON.parse(response.body)
          expect(response).to be_successful
          expect(json_response["name"]).to eq("Test Module")
        end
      end
end
