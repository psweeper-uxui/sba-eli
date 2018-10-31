class SessionController < ApplicationController
    def create             
        #this is just a placeholder until a more robust user/session implementation can be made
        session["omniauth.auth"] = request.env['omniauth.auth']
        
        redirect_to '/'
    end
end
