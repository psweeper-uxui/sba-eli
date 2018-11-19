class ConfirmationCodeController < ApplicationController
  before_action :valid_session?

  def create
    email = Current.user.email
    CognitoService.confirm_sign_up(email, code)

    head :created
  rescue StandardError
    head :unprocessable_entity && return
  end
end
