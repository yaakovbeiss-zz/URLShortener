class Api::ShortUrlsController < ApplicationController

  def create
    @short_url = ShortUrl.new(short_url_params)
    @short_url.short_url = ShortUrl.shorten_url(@short_url.long_url)

    if @short_url.save
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
      @short_urls = ShortUrl.all
    end


  private

  def short_url_params
    params.require(:short_url).permit(:long_url, :short_url, :views)
  end
end
