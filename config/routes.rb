Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/current-user', to: 'users#get_current_user'

  resources :users, only: [:create]
  resources :pickups
  # Defines the root path route ("/")
  # root "articles#index"
end
