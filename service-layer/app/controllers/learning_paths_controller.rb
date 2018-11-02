class LearningPathsController < ApplicationController
  def index
    response= HTTParty.get(ENV["CANVAS_HOST"] + "/api/v1/courses",
      headers: { "Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token })

    @learning_paths = response.body
    render json: @learning_paths, status: 200
  end

  def show
    response= HTTParty.get(ENV["CANVAS_HOST"] + "/api/v1/courses/" + params[:id],
      headers: { "Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token })

    @learning_path = response.body
    render json: @learning_path, status: 200
  end

  def destroy
    response= HTTParty.delete(ENV["CANVAS_HOST"] + "/api/v1/courses/" + params[:id],
      headers: { "Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token })

    head :no_content
  end
end
