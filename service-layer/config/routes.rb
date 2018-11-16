
Rails.application.routes.draw do
  get "/auth/:provider/callback", to: "session#create"

  resource :cofirmation_code, only: [:create]
  resources :users
  resources :learning_objectives
  resources :learning_paths
  resources :learning_events
  resource :session, only: [:create, :destroy]
  resource :sign_up, only: [:create]

end
