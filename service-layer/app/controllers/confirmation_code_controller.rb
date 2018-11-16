class ConfirmationCodeController < ApplicationController

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
