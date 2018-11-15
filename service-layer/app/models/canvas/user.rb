module Canvas
  module User
    include Canvas::Base
    include HTTParty

    base_uri "#{canvas_host}/api/v1/"

    def self.all
      get(canvas_accounts_url, base_options).body
    end

    def self.read_user(user_id)
      get(canvas_user_url(user_id), base_options).body
    end

    def self.read_user_custom_data(user_id)
      get("#{canvas_custom_data_url(user_id)}?ns=#{ENV['CANVAS_NAMESPACE']}", base_options).body
    end

    def self.create_user(user_body)
      options = base_options.merge!(body: user_body)
      post(canvas_accounts_url, options)
    end

    def self.update_user(user_id, user_body)
      options = base_options.merge!(body: user_body)
      put(canvas_user_url(user_id), options)
    end

    # both update and create
    def self.user_custom_data(user_id, custom_data_body)
      options = base_options.merge!(body: custom_data_body)
      put(canvas_custom_data_url(user_id), options)
    end

    def self.destroy(user_id)
      delete("#{canvas_accounts_url}#{user_id}", base_options)
    end

    def self.destroy_custom_data(user_id)
      delete(canvas_custom_data_url(user_id) + "?ns=#{ENV['CANVAS_NAMESPACE']}", base_options).body
    end

    private

    def self.canvas_accounts_url
      "/accounts/#{ENV['CANVAS_ACCOUNT_ID']}/users/"
    end

    def self.canvas_user_url(user_id)
      "/users/#{user_id}"
    end

    def self.canvas_custom_data_url(user_id)
      "/users/#{user_id}/custom_data/"
    end
  end
end
