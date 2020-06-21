Rails.application.routes.draw do
  # get 'messages/create'
  devise_for :users
  root 'rooms#show'
  # resources :messages, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # mount ActionCable.server => '/cable'
end
