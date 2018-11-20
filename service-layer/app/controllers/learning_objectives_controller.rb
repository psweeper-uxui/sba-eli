class LearningObjectivesController < ApplicationController
  before_action :instantiate_learning_objective

  def index
    @learning_objectives = @learning_objective.all(params[:course_id])
    render json: @learning_objectives, status: :ok
  end

  def show
    @learning_objective = @learning_objective.find(params[:course_id], params[:id])
    render json: @learning_objective, status: :ok
  end

  def create
    @learning_objective = @learning_objective.create(params[:course_id], params)
    render json: @learning_objective, status: :ok
  end

  def update
    @learning_objective = @learning_objective.update(params[:course_id], params[:id], params)
    render json: @learning_objective, status: :ok
  end

  def destroy
    @learning_objective = @learning_objective.destroy(params[:course_id], params[:id])
    render json: @learning_objective, status: :ok
  end

  private

  def session_token
    # session["omniauth.auth"]["credentials"].token
    # Use Developer Token for now for testing. No need to authenticate through Oauth.
    ENV["CANVAS_TOKEN"]
  end

  def instantiate_learning_objective
    @learning_objective = LearningObjective.new(session_token)
  end
end
