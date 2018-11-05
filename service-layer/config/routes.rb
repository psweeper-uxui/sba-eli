Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'session#create'
  get '/session/refresh', to: 'session#refresh_token'
  
  resources :users, :learning_event  
end