
require 'json'



class LearningEventController < ApplicationController
    include Response
    include HTTParty
    include ActionController::Cookies
    
    def index
        #@response = HTTParty.get('http://ec2-100-24-107-33.compute-1.amazonaws.com/api/v1/courses/1/modules')        
        #json_response(@response)
        
        #Need a check for session, this will error out without going through /auth/canvas path first
        @response = HTTParty.get('http://ec2-100-24-107-33.compute-1.amazonaws.com/api/v1/courses/1/modules', {
            headers: {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token  }                    
        })
                         
        #json_response({ test: "Bearer " + cookies[:_interslice_session]})
        json_response(@response.parsed_response)
    end  
end
