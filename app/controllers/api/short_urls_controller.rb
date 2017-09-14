class Api::ShortUrlsController < ApplicationController

  def show
    @short_url = ShortUrl.find_by(short_url: params[:short_url])
    redirect_to @short_url.long_url
  end

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


  private

  def short_url_params
    params.require(:short_url).permit(:short_url, :views)
  end
end
