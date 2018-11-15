module CognitoFactory
  def sign_up_user(email)
    details = Aws::CognitoIdentityProvider::Types::CodeDeliveryDetailsType.new(
      destination: email,
      delivery_medium: "EMAIL",
      attribute_name: "email"
    )
    Aws::CognitoIdentityProvider::Types::SignUpResponse.new(
      code_delivery_details: details,
      user_confirmed: false,
      user_sub: SecureRandom.uuid
    )
  end

  def sign_up_existing_user
    Proc.new { throw Aws::CognitoIdentityProvider::Errors.error_class("UsernameExistsException") }
  end
end
