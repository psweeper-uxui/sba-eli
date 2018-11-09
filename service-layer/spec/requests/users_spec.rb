require "rails_helper"

describe UsersController do
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
    it "gets a single user" do
      VCR.use_cassette("users/16") do
        user_id = 16
        get "/users/#{user_id}"

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json["name"]).to eq("Brand New User")
      end
    end
  end

  describe "UPDATE /users/:id" do
    it "updates a user" do
      VCR.use_cassette("users/update_user") do
        user_id = 16

        params = "{	\"user_data\": {\"user\":{\"name\":\"foo\",\"sortable_name\":\"S,Kelly\",\"short_name\":\"Kelly\",\"email\":\"email+3446@gmail.com\"},\"pseudonym\":{\"unique_id\":\"email+789@gmail.com\"}},\"custom_data\":{\"data\":{\"user\":{\"linked_in\":\"http://www.google.com\",\"zipcode\":\"06320\",\"percent_ownership\":97,\"goal_percent_revenue\":12,\"goal_revenue_amount\":1000,\"goal_percent_increase_employees\":15,\"goal_increase_employee_amount\":160,\"race\":[\"race1\",\"race2\"],\"ethnicity\":\"yes\"},\"company\":{\"company_id\":\"12312\",\"company_name\":\"NewCompany\",\"industry\":[\"one\",\"two\",\"three\"],\"naics\":[\"1234\",\"123123\",\"8976\"],\"num_employees\":40,\"website\":\"http://www.website.com\"}}}}"

        headers "CONTENT_TYPE", "application/json"
        put "/users/#{user_id}", params: params

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json["name"]).to eq("foo")
      end
    end
  end

  describe "DELETE /users/:id" do
    it "deletes a user and their custom data" do
      VCR.use_cassette("users/delete_user") do
        user_id = 10
        delete "/users/#{user_id}"

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json["data"]).not_to be_nil
      end
    end
  end
end
