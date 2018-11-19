class LearningEventsController < ApplicationController
  def index
    @events = learning_event.all(params[:course_id], params[:module_id])
    render json: @events, status: 200
  end

  def show
    @event = learning_event.find(params[:course_id], params[:module_id], params[:id])
    render json: @event, status: 200
  end

  def update
    @event = learning_event.update(params[:course_id], params[:module_id], params[:id], params)
    render json: @event, status: 200
  end

  def destroy
    @event = learning_event.destroy(params[:course_id], params[:module_id], params[:id])
    render json: @event, status: 200
  end

  private

  def session_token
    ENV["CANVAS_TOKEN"]
  end

  def learning_event
    LearningEvent.new(session_token)
  end
end
