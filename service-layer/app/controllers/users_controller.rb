class UsersController < ApplicationController
  include Response

  #TODO: abstract out the http and authorization calls

  def account_id
    ENV["CANVAS_ACCOUNT_ID"]
  end

  def user_id
    #TODO: grab this value being passed in as a parameter
    "10" #self.find(params[:id])
  end

  def canvas_namespace
    "sba-eli-service"
  end

  def canvas_accounts_url
    ENV["CANVAS_HOST"] + "/api/v1/accounts/" + self.account_id + "/users/"
  end

  def canvas_user_url
    ENV["CANVAS_HOST"] + "/api/v1/users/" + self.user_id
  end

  def canvas_custom_data_url
    ENV["CANVAS_HOST"] + "/api/v1/users/" + self.user_id + "/custom_data"
  end


  def index
    response = HTTParty.get(self.canvas_accounts_url,
                            :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token})
    render json: response.body, status: 200
  end

  def read_user
    response = HTTParty.get(self.canvas_user_url,
                            :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token})
    render json: response.body, status: 200
  end

  def read_custom_data
    response = HTTParty.get(self.canvas_custom_data_url + "?ns=" + self.canvas_namespace,
                            :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token})
    render json: response.body, status: 200
  end

  def create_user
    response = HTTParty.post(self.canvas_accounts_url,
                             :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token},
                             :body => user_body_request("User Test",
                                                        "Test, User",
                                                        "U-Test",
                                                        nil,
                                                        "email+1@gmail.com",
                                                        "unique_id+1@gmail.com"))

    render json: response.body, status: 200
  end

  def update_user
    response = HTTParty.put(self.canvas_user_url,
                            :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token},
                            :body => user_body_update_request("User Test",
                                                              "Test, User",
                                                              "U-Test",
                                                              nil,
                                                              "email+2@gmail.com",
                                                              "https://picsum.photos/200"))

    render json: response.body, status: 200
  end

  def user_custom_data(json_data)
    #example data: {'fruit': 'kiwi', 'candy': 'baby ruth'}
    body = {
        'ns': self.canvas_namespace,
        'data': json_data
    }
    response = HTTParty.put(self.canvas_custom_data_url,
                            :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token},
                            :body => body)

    render json: response.body, status: 200
  end

  def delete_user
    response = HTTParty.delete(self.canvas_accounts_url + self.user_id,
                               :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token})

    render json: response.body, status: 200
  end

  def delete_custom_data
    response = HTTParty.delete(self.canvas_custom_data_url,
                               :headers => {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token})
    render json: response.body, status: 200
  end

  #TODO: only send fields that have values
  def user_body_request(name, sortable_name, short_name, birth_date, email, unique_id)
    {
        'user' => {
            'name': name,
            'sortable_name': sortable_name,
            'short_name': short_name,
            'birthdate': birth_date,
            'email': email
        },
        'pseudonym': {
            'unique_id': unique_id
        }
    }
  end

  #TODO: consolidate with above request
  def user_body_update_request(name, sortable_name, short_name, birth_date, email, avatar)
    {
        'user' => {
            'name': name,
            'sortable_name': sortable_name,
            'short_name': short_name,
            'birthdate': birth_date,
            'email': email,
            'avatar': {
                'url': avatar
            }
        }
    }
  end
end
