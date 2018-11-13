require "rails_helper"

describe UsersController do
  describe "GET /users" do
    it "gets a list of all users" do
      VCR.use_cassette("users") do
        tmp = Canvas::User.new(ENV['CANVAS_TOKEN']).all
        tmp_json = JSON.parse(tmp)

        expect(tmp).to_not be_nil
        expect(tmp_json.size).to eq(10)
        expect(tmp_json[0]["name"]).to eq("Brand New User")
        puts(tmp.inspect)
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

  describe "POST /users/" do
    it "creates a single user" do
      VCR.use_cassette("users/create_user") do

        params = "{
          \"user\": {
            \"first_name\":\"John\",
            \"last_name\": \"Doe\",
            \"short_name\":\"J\",
            \"email\": \"email+1234@gmail.com\",
            \"password\": \"ChangeME123\",
            \"password_confirmation\": \"ChangeME123\",

          }
        }"
        headers "CONTENT_TYPE", "application/json"
        post "/users/", params: params

        json = JSON.parse(response.body)

        expect(response).to be_successful
=begin
        expect(json["name"]).to eq("John")
        expect(json["sortable_name"]).to eq("New APIUser, Brand")
        expect(json["short_name"]).to eq("B")
        expect(json["login_id"]).to eq("email123asdf@gmail.com")
=end
      end
    end
  end

  describe "UPDATE /users/:id" do
    xit "updates a user" do
      VCR.use_cassette("users/update_user") do
        user_id = 16

        params = "{
                   \"first_name\":\"John\",
                   \"last_name\":\"Doe\",
                   \"email\":\"email+1@gmail.com\",
                   \"linked_in\":\"http://www.google.com\",
                   \"zipcode\":\"06320\",
                   \"percent_ownership\":97,
                   \"goal_percent_revenue\":12,
                   \"goal_revenue_amount\":1000,
                   \"goal_percent_increase_employees\":15,
                   \"goal_increase_employee_amount\":160,
                   \"race\":[\"race1\",\"race2\"],
                   \"ethnicity\":\"yes\",
                   \"company\":{
                       \"company_id\":\"12312\",
                       \"company_name\":\"NewCompany\",
                       \"industry\":[\"one\",\"two\",\"three\"],
                       \"naics\":[\"1234\",\"123123\",\"8976\"],
                       \"num_employees\":40,
                       \"website\":\"http://www.website.com\"
                     }
                  }"

        headers "CONTENT_TYPE", "application/json"
        put "/users/#{user_id}", params: params

        json = JSON.parse(response.body)

        expect(response).to be_successful
        expect(json["name"]).to eq("foo")
      end
    end
  end

  describe "DELETE /users/:id" do
    xit "deletes a user and their custom data" do
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
