class UserCreationService
  include ActiveModel::Model

  attr_accessor :first_name,
                :last_name,
                :email,
                :short_name,
                :password,
                :password_confirmation,
                :user

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, email: true
  validates :password, password_complexity: true
  validates_confirmation_of :password

  def create
    return false unless valid?

    # Create the user in Cognito
    client = Aws::CognitoIdentityProvider::Client.new(
      region: "us-east-1",
      access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
    )

=begin
    client.sign_up({
      client_id: "ClientIdType", # required
      username: "UsernameType", # required
      password: "PasswordType", # required
      user_attributes: [
        {
          name: "FirstName", # required
          value: first_name,
        },
        {
          name: "LastName", # required
          value: last_name,
        }
      ]
    })
=end

    # Create user in Canvas
    canvas_user = Canvas::User.new(ENV["CANVAS_TOKEN"])
    response = canvas_user.create_user(build_canvas_json)

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
