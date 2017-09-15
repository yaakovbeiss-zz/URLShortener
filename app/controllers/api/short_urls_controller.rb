class Api::ShortUrlsController < ApplicationController

  def create
    @short_url = ShortUrl.new(short_url_params)

    if @short_url.save
      @short_url.short_url = @short_url.shorten_url
      @short_url.save

      @short_urls = ShortUrl.all.order('created_at DESC')
      render :index
    else
      render json: @short_url, status: 422
    end
  end

    def update
      short_url = ShortUrl.find(params[:id])

      if short_url.update(short_url_params)
        render :index
      else
        render json: @short_url, status: 422
      end
    end

    def index
      @short_urls = ShortUrl.all.order('views DESC')
    end


  private

  def short_url_params
    params.require(:short_url).permit(:long_url, :views)
  end
end
