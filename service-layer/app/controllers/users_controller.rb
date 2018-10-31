class UsersController < ApplicationController
  include Response

  def index
    @users = User.all
    json_response(@users)
  end
end
