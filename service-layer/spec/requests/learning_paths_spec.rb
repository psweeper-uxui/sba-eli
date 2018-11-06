require "rails_helper"

describe "LearningPaths" do
  describe "GET /learning_paths" do
    it "gets a list of all courses" do
      VCR.use_cassette("learning_paths/get_learning_paths") do
        get "/learning_paths"

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json.size).to eq(3)
        expect(json[0]["name"]).to eq("Avengers")
      end
    end
  end

  describe "GET /learning_paths/:id" do
    it "gets a single learning path" do
      VCR.use_cassette("learning_paths/get_lp") do
        learning_path_id = 1

        get "/learning_paths/#{learning_path_id}"

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json["name"]).to eq("Avengers")
      end
    end
  end

  describe "DELETE /learning_paths/:id" do
    it "deletes a learning path" do
      VCR.use_cassette("learning_paths/delete_lp") do
        learning_path_id = 3
        delete "/learning_paths/#{learning_path_id}"

        expect(response).to be_successful
      end
    end
  end
end
