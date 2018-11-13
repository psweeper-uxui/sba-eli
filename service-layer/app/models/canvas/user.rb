class Canvas::User
  include HTTParty
  base_uri "#{ENV['CANVAS_HOST']}/api/v1/"

=begin
 validates :user_id, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
=end

  def initialize(session)
    @options = {
        headers: {
            "Authorization" => "Bearer " + session
        }
    }
  end

  def all
    self.class.get(canvas_accounts_url, @options).body
  end

  def read_user(user_id)
    self.class.get(canvas_user_url(user_id), @options).body
  end

  def read_user_custom_data(user_id)
    self.class.get("#{canvas_custom_data_url(user_id)}?ns=#{ENV['CANVAS_NAMESPACE']}", @options).body
  end

  def create_user(user_body)
    options = @options.merge!(body: user_body)
    self.class.post(canvas_accounts_url, options)
  end

  def update_user(user_id, user_body)
    options = @options.merge!(body: user_body)
    self.class.put(canvas_user_url(user_id), options)
  end

  # both update and create
  def user_custom_data(user_id, custom_data_body)
    options = @options.merge!(body: custom_data_body)
    self.class.put(canvas_custom_data_url(user_id), options)
  end

  def destroy(user_id)
    self.class.delete(canvas_accounts_url + user_id, @options).body
  end

  def destroy_custom_data(user_id)
    self.class.delete(canvas_custom_data_url(user_id) + "?ns=#{ENV['CANVAS_NAMESPACE']}", @options).body
  end

  private

  def canvas_accounts_url
    "/accounts/#{ENV['CANVAS_ACCOUNT_ID']}/users/"
  end

  def canvas_user_url(user_id)
    "/users/#{user_id}"
  end

  def canvas_custom_data_url(user_id)
    "/users/#{user_id}/custom_data/"
  end
end
