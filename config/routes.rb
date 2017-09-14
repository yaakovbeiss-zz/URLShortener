Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get "/:short_url", to: "short_urls#show"
    resources :short_urls, only: [:create, :index, :update]
  end

end
