Rails.application.routes.draw do
  resources :doses
  resources :cocktails
  resources :ingredients
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
