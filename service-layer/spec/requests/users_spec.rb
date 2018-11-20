require "rails_helper"

describe UsersController do
  include Mocks::UsersHelper

  describe "GET /users" do
    it "gets a list of all users" do
      VCR.use_cassette("users") do
        get "/users"

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json.size).to eq(10)
        expect(json[0]["name"]).to eq("Brand New User")
      end
    end
  end

  describe "GET /users/:id" do
    it "gets a single users" do
      VCR.turned_off do
        user_id = 1
        stub_get_user_request(id: user_id)
        stub_get_custom_data_request(id: user_id)

        get "/users/#{user_id}"
        json = JSON.parse(response.body)
        expect(response).to be_successful
        expect(json["name"]).to eq("canvas@fearless.tech")
      end
    end
  end

  describe "UPDATE /users/:id" do
    it "updates a user" do
      VCR.turned_off do
        user_id = 2
        stub_update_user_request(id: 2)
        stub_update_custom_data_request(id: 2)

        params = json_hash("users/update_user_request.json")

        headers "CONTENT_TYPE", "application/json"
        put "/users/#{user_id}", params: params.to_json

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json["name"]).to eq("foo")
      end
    end
  end

  describe "DELETE /users/:id" do
    it "deletes a user and their custom data" do
      VCR.turned_off do
        user_id = 10
        stub_delete_custom_data_request(id: user_id)
        stub_delete_user_request(id: user_id)

        delete "/users/#{user_id}"

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json["user"]).not_to be_nil
      end
    end
  end
end
