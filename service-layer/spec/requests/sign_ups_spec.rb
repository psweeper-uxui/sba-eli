require "rails_helper"

describe "SignUps" do
  include Mocks::CognitoHelper
  let (:uri) { "/sign_up" }
  let (:first_name) { "Jack" }
  let (:last_name) { "Jill" }
  let (:email) { "jack@jill.com" }
  let (:password) { "changeME123!" }

  describe "POST /sign_up" do
    it "creates a validate account" do
      VCR.use_cassette("sign_ups/create_valid_sign_up") do
        params = {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          password_confirmation: password,
        }
        post uri, params: params
        expect(response).to be_successful
      end
    end

    it "returns unprocessable_entity if data is invalid" do
      VCR.use_cassette("sign_ups/invalid_sign_up") do
        params = {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          password_confirmation: "ThisAintThePassword",
        }
        post uri, params: params
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context do
      before :context do
        Aws.config[:cognitoidentityprovider] = {
          stub_responses: {
            sign_up: sign_up_existing_user,
          },
        }
      end
      it "returns unprocessable_entity if account already exists" do
        VCR.use_cassette("sign_ups/duplicate_sign_up") do
          params = {
            first_name: "Nick",
            last_name: "Watson",
            email: "nick.watson@claritybizsol.com",
            password: password,
            password_confirmation: password,
          }
          post uri, params: params
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end
  end
end
