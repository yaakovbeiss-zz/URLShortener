class ShortUrlsController < ApplicationController

  def show
    @short_url = ShortUrl.find_by(short_url: params[:short_url])

    redirect_to @short_url.long_url
  end

end
