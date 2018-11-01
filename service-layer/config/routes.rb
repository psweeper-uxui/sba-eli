Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'session#create'
  
  resources :users, :learning_event   
end