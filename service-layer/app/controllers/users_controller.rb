class UsersController < ApplicationController
  require 'json'

  def index
    render json: @user.all, status: 200
  end

  def show
    user_data = JSON.parse(@user.read_user(params[:id]))
    custom_data = JSON.parse(@user.read_user_custom_data(params[:id]))

    render json: user_data.merge(custom_data), status: 200
  end

  def create
    user_service = UserCreationService.new(user_params)
    if user_service.create
      render json: user_service.user.to_json
    else
      render nothing: true, status: 422
    end
  end

  def update
    post_body = JSON.parse(request.body.string)
    user_data = @user.update_user(params[:id], post_body["user_data"])
    custom_data = @user.user_custom_data(params[:id], post_body["custom_data"])
    render json: user_data.merge!(custom_data)
  end

  def destroy
    custom_data = JSON.parse(@user.destroy_custom_data(params[:id]))
    user_data = JSON.parse(@user.destroy(params[:id]))
    render json: user_data.merge(custom_data)
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :short_name,
      :email,
      :password,
      :password_confirmation
    )
  end

  # TODO: revisit when we're using different auth
  def session_token
    ENV["CANVAS_TOKEN"]
  end

end
