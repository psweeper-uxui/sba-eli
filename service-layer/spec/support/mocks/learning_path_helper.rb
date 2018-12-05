module Mocks
  module LearningPathHelper
    include JSONFixtures
    include RequestHelper
    def stub_fetch_all_learning_paths(options = {})
      status = options.fetch(:status, 200)
      url = "#{ENV['CANVAS_HOST']}/api/v1/courses"
      response_body = options.fetch(:response_body,
                                  json_string("learning_paths/learning_paths.json"))

      stub_authorized_request(:get, url).to_return(status: status, body: response_body)
    end
  end
end
