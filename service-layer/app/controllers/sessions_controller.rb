class SessionsController < ApplicationController
  include SecurityConcern

  skip_before_action :authenticate_request, only: :create
  before_action :valid_session?, only: :destroy

  def create
    Rails.logger.info "*" * 80
    response = CognitoService.authenticate(params[:email], params[:password])
    Rails.logger.info response
    Rails.logger.info "Past CognitoService"
    canvas_user_response = Canvas::User.fetch_by_email(params[:email])
    Rails.logger.info "Past Canvas::User"
    sign_in User.from_canvas_json(canvas_user_response)
    Rails.logger.info "Signed In"
    render json: Current.user.to_json
    Rails.logger.info "*" * 80
  rescue Aws::CognitoIdentityProvider::Errors::NotAuthorizedException,
         Aws::CognitoIdentityProvider::Errors::UserNotFoundException

    render json: {}, status: :forbidden
  end

  def destroy
    sign_out
    head :ok
  end
end
