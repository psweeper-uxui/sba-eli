
require 'json'

#Store in env variables?
$api_uri = 'http://ec2-100-24-107-33.compute-1.amazonaws.com/api/v1'
class LearningEventController < ApplicationController    
    include Response
    include HTTParty        
        
    def index               
        #Need a check for session, this will error out without going through /auth/canvas path first
        @response = HTTParty.get("#{$api_uri}/courses/1/modules", {
            headers: {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token  }                    
        })                      
                         
        #json_response({ test: "Bearer " + cookies[:_interslice_session]})
        json_response(@response.parsed_response)
    end

    def show
        @id = params[:id]
        @course_id = 1

        @response = HTTParty.get("#{$api_uri}/courses/#{@course_id}/modules/#{@id}", {
            headers: {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token  }                    
        })

        json_response(@response.parsed_response)
    end

    def create        
        #Need better way to pass this
        @course_id = 1

        @response = HTTParty.post("#{$api_uri}/courses/#{@course_id}/modules/", {
            headers: {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token  },
            body: {
                course_id: "1",                                
                'module[name]':  params.fetch(:name, "Test Module 6"),
                'module[unlock_at]': params.fetch(:unlock_at, ""),                                
                'module[position]': params.fetch(:position, ""),                                
                'module[require_sequential_progress]': params.fetch(:require_sequential_progress, ""),  
                'module[prerequisite_module_ids][]': params.fetch(:prerequisite_module_ids, ""),                                
                'module[publish_final_grade]': params.fetch(:publish_final_grade, "")                             
            }                    
        })

        json_response(@response.parsed_response)
    end

    def update
        @course_id = 1        

        @response = HTTParty.put("#{$api_uri}/courses/#{@course_id}/modules/", {
            headers: {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token  },
            body: {
                id: params.fetch(:module_id, ""),
                course_id: params.fetch(:course_id, "1"),                                
                'module[name]':  params.fetch(:name, ""),
                'module[unlock_at]': params.fetch(:unlock_at, ""),                                
                'module[position]': params.fetch(:position, ""),                                
                'module[require_sequential_progress]': params.fetch(:require_sequential_progress, ""),  
                'module[prerequisite_module_ids][]': params.fetch(:prerequisite_module_ids, ""),                                
                'module[publish_final_grade]': params.fetch(:publish_final_grade, "")                             
            }                    
        })

        json_response(@response.parsed_response)
    end

    def destroy
        @course_id = 1        

        @response = HTTParty.delete("#{$api_uri}/courses/#{@course_id}/modules/", {
            headers: {"Authorization" => "Bearer " + session["omniauth.auth"]["credentials"].token  },
            body: {
                id: params.fetch(:module_id, ""),
                course_id: params.fetch(:course_id, "1")                                            
            }                    
        })
    end
end
