class SignUpsController < ApplicationController

  def create
    new_account = UserCreationService.new(model_params)

    if new_account.create
      render json: new_account.user, status: :created
    else
      render_error(new_account.to_json, :unprocessable_entity)
    end
  end

  private

    def model_params
      params.permit(
        :first_name,
        :last_name,
        :email,
        :password,
        :password_confirmation
      )
    end

end
