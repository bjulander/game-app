Rails.application.routes.draw do
  resources :orders
  resources :games
  resources :choices
  resources :ingredients
  resources :sandwiches
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
