Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  #{format: :json} tells the controller to first look for a json.jbuilder view rather than html.erb view
  namespace :api, defaults: {format: :json} do
    resources :pokemon, only: [:create, :index, :show]
  end
end
