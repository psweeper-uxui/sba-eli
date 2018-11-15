class UserCreationService
  include ActiveModel::Model

  attr_accessor :first_name,
                :last_name,
                :email,
                :short_name,
                :password,
                :password_confirmation,
                :user

  validates :first_name, :last_name, :password_confirmation, presence: true
  validates :email, presence: true, email: true
  validates :password, password_complexity: true
  validates_confirmation_of :password

  def create
    return false unless valid?

    # Create the user in Cognito
    client = Aws::CognitoIdentityProvider::Client.new(
      region: ENV['AWS_REGION'],
      access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
    )

    begin
      cognito_response = client.sign_up({
        client_id: ENV['AWS_COGNITO_CLIENT_ID'],
        username: email,
        password: password,
        user_attributes: [
          {
            name: "email",
            value: email
          }
        ]
      })
    rescue Aws::CognitoIdentityProvider::Errors::UsernameExistsException
      errors.add(:email, "already exists.")
      return false
    end

    # TODO: We're going to want to save the user_sub from the
    # cognito response as a custom attribute in canvas

    # Create user in Canvas
    response = Canvas::User.create_user(build_canvas_json)

    Rails.logger.debug response

    # Create the user in Local database
    self.user = User.create!(
      user_id: response.body["id"],
      first_name: first_name,
      last_name: last_name,
      email: email
    )

    return true
  end

  #private

  def build_canvas_json
    {
      "user": {
        "name": full_name,
        "sortable_name": sortable_name,
        "short_name": short_name,
        "email": email
      },
      "pseudonym": {
        "unique_id": email
      }
    }
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def sortable_name
    "#{last_name}, #{first_name}"
  end


end
