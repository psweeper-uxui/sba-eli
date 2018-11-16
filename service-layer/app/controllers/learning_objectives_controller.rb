require "json"

$api_uri = "http://ec2-100-24-107-33.compute-1.amazonaws.com/api/v1"
class LearningObjectivesController < ApplicationController
  include Response
  include HTTParty
  before_action :instantiate_learning_objective

  def index
    @learning_events = @learning_objective.all(params[:course_id])
    render json: @learning_events, status: 200
  end

  def show
    @learning_event = @learning_objective.find(params[:course_id], params[:id])
    render json: @learning_event, status: 200
  end

  def create
    @learning_event = @learning_objective.create(params[:course_id], params)
    render json: @learning_event, status: 200
  end

  def update
    @learning_event = @learning_objective.update(params[:course_id], params[:id], params)
    render json: @learning_event, status: 200
  end

  def destroy
    @learning_event = @learning_objective.destroy(params[:course_id], params[:id])
    render json: @learning_event, status: 200
  end

  def session_token
    # session["omniauth.auth"]["credentials"].token
    # Use Developer Token for now for testing. No need to authenticate through Oauth.
    ENV["CANVAS_TOKEN"]
  end

  def instantiate_learning_objective
    @learning_objective = LearningObjective.new(session_token)
  end
end
