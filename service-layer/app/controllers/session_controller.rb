class SessionController < ApplicationController
    include Response

    def create             
        #this is just a placeholder until a more robust user/session implementation can be made
        session["omniauth.auth"] = request.env['omniauth.auth']

        redirect_to '/'
    end
    
    # /session/refresh will refresh the token saved in application.yml, requires CANVAS_TOKEN and CANVAS_REFRESH_TOKEN saved
    # Placeholder until proper auth solution
    def refresh_token
        @response = HTTParty.post("#{APP_CONFIG['canvas_host']}/login/oauth2/token", {            
            body: {
                grant_type: 'refresh_token',                                
                'client_id':  APP_CONFIG['canvas_client_id'],
                'client_secret':  APP_CONFIG['canvas_client_secret'],
                'refresh_token':  ENV['CANVAS_REFRESH_TOKEN']                                
            }                    
        })

        data = @response.parsed_response["access_token"]        

        #replace this with database call
        require 'yaml' 
        d = YAML::load_file('config/application.yml') #Load
        d['CANVAS_TOKEN'] = data #Modify
        File.open('config/application.yml', 'w') {|f| f.write d.to_yaml } #Store

        json_response(@response.parsed_response)
    end

end
