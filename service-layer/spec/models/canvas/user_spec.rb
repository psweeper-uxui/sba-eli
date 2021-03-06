require "rails_helper"

describe "Canvas::User" do
  describe "GET /users/" do
    it "gets a list of all users" do
      VCR.use_cassette("users") do
        tmp_json = Canvas::User.all
        expect(tmp_json).to_not be_nil
        expect(tmp_json.size).to eq(10)
        expect(tmp_json[0]["name"]).to eq("Brand New User")
      end
    end
  end

  describe "GET /users/16" do
    it "gets a single user" do
      VCR.use_cassette("users/16") do
        tmp_json = Canvas::User.read_user(16)
        expect(tmp_json).to_not be_nil
        expect(tmp_json["email"]).to eq("email+3446@gmail.com")
      end
    end

    it "gets custom data for a user" do
      VCR.use_cassette("users/16_custom") do
        tmp_json = Canvas::User.read_user_custom_data(16)
        expect(tmp_json).to_not be_nil
        expect(tmp_json["data"]["color"]).to eq("purple")
      end
    end
  end

  describe "POST /users/" do
    it "creates a single user" do
      VCR.use_cassette("users/create_user") do
        params = {
          "user": {
            "name": "Brand New APIUser",
            "sortable_name": "New APIUser, Brand",
            "short_name": "B",
            "email": "email+12345@gmail.com",
          },
          "pseudonym": {
            "unique_id": "email+12345@gmail.com",
          },
        }
        json = Canvas::User.create_user(params)
        expect(json).to_not be_nil
        expect(json["name"]).to eq("Brand New APIUser")
      end
    end

    it "gets creates custom data for a user" do
      VCR.use_cassette("users/create_user_custom") do
        user_id = 41
        params = {
          "ns": ENV["CANVAS_NAMESPACE"],
          "data": {
            "race": "yes",
            "fruit": "apple",
            "color": "purple",
          },
        }
        tmp_json = Canvas::User.user_custom_data(user_id, params)
        expect(tmp_json).to_not be_nil
        expect(tmp_json["data"]["fruit"]).to eq("apple")
      end
    end
  end

  describe "UPDATE /users/:id" do
    it "updates a user" do
      VCR.use_cassette("users/update_user") do
        user_id = 16
        params = {
          "user": {
            "name": "Different name for APIUser",
            "sortable_name": "New APIUser, Brand",
            "short_name": "B",
            "email": "email+123456@gmail.com",
          },
        }
        json = Canvas::User.update_user(user_id, params)

        expect(json).to_not be_nil
        expect(json["name"]).to eq("Different name for APIUser")
      end
    end
  end

  describe "DELETE /users/:id" do
    it "deletes a user and their custom data" do
      VCR.use_cassette("users/delete_user") do
        user_id = 40
        json = Canvas::User.destroy(user_id)
        expect(json).to_not be_nil
      end
    end
  end
end
