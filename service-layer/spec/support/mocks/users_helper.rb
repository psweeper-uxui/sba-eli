module Mocks
  module UsersHelper
    include JSONFixtures

    def stub_delete_custom_data_request(options = {})
      id = options.fetch(:id, 1)
      status = options.fetch(:status, 200)
      url = "#{ENV['CANVAS_HOST']}/api/v1/users/#{id}/custom_data/?ns=#{ENV['CANVAS_NAMESPACE']}"
      response_body = options.fetch(:response_body,
                                  json_string("users/delete_custom_data.json"))

      stub_request(:delete, url).
        with(
          headers: {
            "Authorization" => "Bearer #{ENV['CANVAS_TOKEN']}",
          },
        ).to_return(status: status, body: response_body)
    end

    def stub_delete_user_request(options = {})
      id = options.fetch(:id, 1)
      status = options.fetch(:status, 200)
      url = "#{ENV['CANVAS_HOST']}/api/v1/accounts/1/users/#{id}"
      response_body = options.fetch(:response_body,
                                  json_string("users/delete_user.json"))
      stub_request(:delete, url).to_return(status: status, body: response_body)
    end

    def stub_get_custom_data_request(options = {})
      id = options.fetch(:id, 1)
      status = options.fetch(:status, 200)
      url = "#{ENV['CANVAS_HOST']}/api/v1/users/#{id}/custom_data/?ns="
      response_body = options.fetch(:response_body,
                                  json_string("users/custom_data_1.json"))

      stub_request(:get, url).to_return(status: status, body: response_body)
    end

    def stub_get_user_request(options = {})
      id = options.fetch(:id, 1)
      status = options.fetch(:status, 200)
      url = "#{ENV['CANVAS_HOST']}/api/v1/users/#{id}"
      response_body = options.fetch(:response_body,
                                  json_string("users/user_1.json"))

      stub_request(:get, url).to_return(status: status, body: response_body)
    end

    def stub_update_custom_data_request(options = {})
      id = options.fetch(:id, 1)
      status = options.fetch(:status, 200)
      url = "#{ENV['CANVAS_HOST']}/api/v1/users/#{id}/custom_data/"
      response_body = options.fetch(:response_body,
                                  json_string("users/update_custom_data.json"))

      stub_request(:put, url).
        with(
          headers: {
            "Authorization" => "Bearer #{ENV['CANVAS_TOKEN']}",
          },
        ).to_return(status: status, body: response_body)
    end

    def stub_update_user_request(options = {})
      id = options.fetch(:id, 1)
      status = options.fetch(:status, 200)
      url = "#{ENV['CANVAS_HOST']}/api/v1/users/#{id}"
      response_body = options.fetch(:response_body,
                                  json_string("users/update_user.json"))

      stub_request(:put, url).
        with(
          headers: {
            "Authorization" => "Bearer #{ENV['CANVAS_TOKEN']}",
          },
        ).to_return(status: status, body: response_body)
    end
  end
end
