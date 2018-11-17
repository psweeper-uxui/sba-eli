class ConfirmationCodeController < ApplicationController
  before_action :valid_session?

  def create
    begin
      email = Current.user.email
      CognitoService.confirm_sign_up(email, code)

      head :created
    rescue
      head :unprocessable_entity && return
    end
  end
end
