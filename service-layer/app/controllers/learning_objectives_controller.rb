class LearningObjectivesController < ApplicationController
  def index
    @learning_objectives = Canvas::LearningObjective.all(params[:course_id])
    render json: @learning_objectives, status: :ok
  end

  def show
    @learning_objective = Canvas::LearningObjective.find(params[:course_id], params[:id])
    render json: @learning_objective, status: :ok
  end

  def create
    @learning_objective = Canvas::LearningObjective.create(params[:course_id], params)
    render json: @learning_objective, status: :ok
  end

  def update
    @learning_objective = Canvas::LearningObjective.update(params[:course_id], params[:id], params)
    render json: @learning_objective, status: :ok
  end

  def destroy
    @learning_objective = Canvas::LearningObjective.destroy(params[:course_id], params[:id])
    render json: @learning_objective, status: :ok
  end
end
