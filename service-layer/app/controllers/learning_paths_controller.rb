class LearningPathsController < ApplicationController
  def index
    @learning_paths = LearningPath.new(session_token).all
    render json: @learning_paths, status: 200
  end

  def show
    @learning_path = LearningPath.new(session_token).find(params[:id])
    render json: @learning_path, status: 200
  end

  def update
    @learning_path = LearningPath.new(session_token).update(params[:id], learning_path_params)
    render json: @learning_path
  end

  def destroy
    LearningPath.new(session_token).destroy(params[:id])
  end

  private

  def session_token
    # session["omniauth.auth"]["credentials"].token

    # Use Developer Token for now for testing. No need to authenticate through Oauth.
    ENV["CANVAS_TOKEN"]
  end

  def learning_path_params
  end
end
