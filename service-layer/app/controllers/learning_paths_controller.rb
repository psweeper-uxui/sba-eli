class LearningPathsController < ApplicationController
  before_action :instantiate_learning_path

  def index
    @learning_paths = @learning_path.all
    render json: @learning_paths, status: :ok
  end

  def show
    @learning_path = @learning_path.find(params[:id])
    render json: @learning_path, status: :ok
  end

  def create
    @learning_path = @learning_path.create(params[:id], params)
    render json: @learning_path
  end

  def update
    @learning_path = @learning_path.update(params[:id], params)
    render json: @learning_path
  end

  def destroy
    @learning_path = @learning_path.destroy(params[:id])
    render json: @learning_path
  end

  private

  def session_token
    # session["omniauth.auth"]["credentials"].token

    # Use Developer Token for now for testing. No need to authenticate through Oauth.
    ENV["CANVAS_TOKEN"]
  end

  def instantiate_learning_path
    @learning_path = LearningPath.new(session_token)
  end
end
