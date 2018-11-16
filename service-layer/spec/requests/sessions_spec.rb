require "rails_helper"

describe "Sessions" do
  let (:uri) { "/session" }
  let (:email) { "nick.watson@claritybizsol.com" }
  let (:valid_password) { "changeME123!" }

  describe "POST /session" do
    it "creates a session for a valid username and password" do
      VCR.use_cassette("sessions/create_valid_session") do
        params = { email: email, password: valid_password }
        post uri, params: params
        expect(response).to be_successful
      end
    end

    it "returns a 403 for an invalid password" do
      VCR.use_cassette("sessions/invalid_password") do
        params = { email: email, password: "thisIsn'tValid" }
        post uri, params: params
        expect(response).to have_http_status(:forbidden)
      end
    end

    it "returns a 403 with an invalid username" do
      VCR.use_cassette("sessions/invalid_password") do
        params = { email: "jack@black.com", password: valid_password }
        post uri, params: params
        expect(response).to have_http_status(:forbidden)
      end
    end
  end
end
