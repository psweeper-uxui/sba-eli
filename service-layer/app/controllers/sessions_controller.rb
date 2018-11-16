class SessionsController < ApplicationController
  include SecurityConcern
  include Response

  skip_before_action :authenticate_request, only: :create
  before_action :valid_session?, only: [:destroy]

  def create
    begin
      response = CognitoService.authenticate(params[:email], params[:password])
      canvas_user_response = Canvas::User.fetch_by_email(params[:email])
      sign_in User.from_canvas_json(canvas_user_response)

      render json: Current.user.to_json
    rescue
      head :forbidden and return
    end
  end

  def destroy
    sign_out
    head :ok
  end

end
