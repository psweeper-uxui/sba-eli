class UsersController < ApplicationController
  include Response

  def index
    @users = [{first_name: 'John', last_name: 'Doe'},
	      {first_name: 'Jane', last_name: 'Miller'}] 
    json_response(@users)
  end
end
