Rails.application.routes.draw do
  get '/orders', to: 'orders#index'
  resources :games
  # get '/ingredients', to: 'ingredients#index'
  resources :ingredients
  resources :sandwiches
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
