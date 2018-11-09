class UsersController < ApplicationController
  require 'json'

  def initialize
    @user = User.new(session_token)
  end

  def index
    render json: @user.all, status: 200
  end

  def show
    user_data = JSON.parse(@user.read_user(params[:id]))
    custom_data = JSON.parse(@user.read_user_custom_data(params[:id]))

    render json: user_data.merge(custom_data), status: 200
  end

  def create
    @user = User.new(session_token).create_user(user_body_request)


    #custom_data = JSON.parse(@user.user_custom_data(params[:id], custom_data_request))
    #if custom_data.has_key? 'data'
    #@user_data.merge(custom_data)
    # end

    render json: tmp, status: 200
  end

  def update
    post_body = ActiveSupport::JSON.decode(request.body.read)
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

  # TODO: revisit when we're using different auth
  def session_token
    ENV["CANVAS_TOKEN"]
  end

=begin
  def example_body
    {
        "user_data": {
            "user" => {
                "name": "Kelly S",
                "sortable_name": "S, Kelly",
                "short_name": "Kelly",
                "email": "email+3446@gmail.com"
            },
            "pseudonym" => {
                "unique_id": "email+789@gmail.com"
            }
        },
        "custom_data": {
            "ns": ENV["CANVAS_NAMESPACE"],
            "data" => {
                "user" => {
                    "linked_in": "http://www.google.com",
                    "zipcode": "06320",
                    "percent_ownership": 97,
                    "goal_percent_revenue": 12,
                    "goal_revenue_amount": 1000,
                    "goal_percent_increase_employees": 15,
                    "goal_increase_employee_amount": 160,
                    "race": ["race1", "race2"],
                    "ethnicity": "yes"
                },
                "company" => {
                    "company_id": "12312",
                    "company_name": "New Company",
                    "industry": ["one", "two", "three"],
                    "naics": ["1234", "123123", "8976"],
                    "num_employees": 40,
                    "website": "http://www.website.com"
                }
            }
        }
    }
  end
=end
end
