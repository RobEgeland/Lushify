Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/current-user', to: 'users#get_current_user'
  get '/deliveries/:date', to: 'deliveries#get_by_date'
  get '/pickups/:date', to: 'pickups#get_by_date'

  resources :users, only: [:create]
  resources :pickups
  resources :deliveries
  # Defines the root path route ("/")
  # root "articles#index"
end
