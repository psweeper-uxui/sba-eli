class LearningEventsController < ApplicationController
  def index
    @learning_events = LearningEvent.new(session_token).all(params[:course_id])
    render json: @learning_events, status: 200
  end

  def show
    @learning_event = LearningEvent.new(session_token).find(params[:course_id], params[:id])
    render json: @learning_events, status: 200
  end

  def destroy
    LearningEvent.new(session_token).destroy(params[:course_id], params[:id])
  end

  private

  def session_token
    ENV["CANVAS_TOKEN"]
  end
end
