class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def render_error(resource, status)
    render  json: resource.to_json, status: status
  end
end
