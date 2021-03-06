class UsersController < ApplicationController
  require "json"

  def index
    render json: Canvas::User.all, status: :ok
  end

  def show
    user_data = Canvas::User.read_user(params[:id])
    custom_data = Canvas::User.read_user_custom_data(params[:id])

    render json: user_data.merge(custom_data), status: :ok
  end

  def update
    post_body = JSON.parse(request.body.string)
    user_data = Canvas::User.update_user(params[:id], post_body["user_data"])
    custom_data = Canvas::User.user_custom_data(params[:id], post_body["custom_data"])
    render json: user_data.merge!(custom_data)
  end

  def destroy
    custom_data = Canvas::User.destroy_custom_data(params[:id])
    user_data = Canvas::User.destroy(params[:id])
    render json: user_data.merge(custom_data)
  end
end
