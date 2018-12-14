class ApplicationController < ActionController::Base
  include SecurityConcern
  skip_before_action :verify_authenticity_token

  def render_error(resource, status)
    render json: resource.to_json, status: status
  end

  # This method will return validation errors that occur when creating or
  # updating a record. Below is an example of its use:
  #
  #  def update
  #    if contentable.update(model_params)
  #      render json: return_json(contentable), status: :ok
  #    else
  #      render errors_for(content)
  #    end
  #  end
  def errors_for(object)
    { json: { errors: object.errors }, status: :unprocessable_entity }
  end
end
