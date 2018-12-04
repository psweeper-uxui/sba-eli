module Mocks
  module CognitoHelper
    include JSONFixtures

    def stub_cognito_invalid_session(*)
      url = "https://cognito-idp.#{ENV['AWS_REGION']}.amazonaws.com/"
      response_body = {
        "__type": "NotAuthorizedException",
        "message": "Incorrect username or password.",
      }.to_json

      stub_request(:post, url).to_return(status: 400, body: response_body)
    end

    def stub_cognito_signup(options = {})
      url = "https://cognito-idp.#{ENV['AWS_REGION']}.amazonaws.com/"
      status = options.fetch(:status, 200)
      response_body = options.fetch(:response_body, json_string("users/create_user.json"))

      stub_request(:post, url).to_return(status: status, body: response_body)
    end

    def sign_up_user(email)
      details = Aws::CognitoIdentityProvider::Types::CodeDeliveryDetailsType.new(
        destination: email,
        delivery_medium: "EMAIL",
        attribute_name: "email",
      )
      Aws::CognitoIdentityProvider::Types::SignUpResponse.new(
        code_delivery_details: details,
        user_confirmed: false,
        user_sub: SecureRandom.uuid,
      )
    end

    def sign_up_existing_user
      Proc.new do
        Aws::CognitoIdentityProvider::Errors.error_class(
          "UsernameExistsException",
        ).new("username", "username")
      end
    end

    def sign_in_invalid_usename
      Proc.new do
        Aws::CognitoIdentityProvider::Errors::UserNotFoundException.new("username", "username")
      end
    end

    def sign_in_invalid_password
      Proc.new do
        Aws::CognitoIdentityProvider::Errors::NotAuthorizedException.new("username", "username")
      end
    end
  end
end
