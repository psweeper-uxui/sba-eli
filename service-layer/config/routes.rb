Rails.application.routes.draw do
  get "/auth/:provider/callback", to: "session#create"



  resources :users
  resources :learning_objectives
  resources :learning_paths
  resources :learning_events
  resource :session, only: [:create]
end
