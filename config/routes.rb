Rails.application.routes.draw do
  root to: 'top#index'

  resources :top, only: :index
  resources :port, only: :index
  
end
