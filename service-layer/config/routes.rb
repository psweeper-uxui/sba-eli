Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'session#create'
  get '/session/refresh', to: 'session#refresh_token'
  
  resources :users
  resources :learning_objectives
  resources :learning_paths
end

