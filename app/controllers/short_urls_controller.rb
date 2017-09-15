class ShortUrlsController < ApplicationController

  def show
    short_url = ShortUrl.find_by(short_url: params[:short_url])
    view_count = short_url.views + 1
    short_url.update(views: view_count)
    redirect_to short_url.long_url
  end

end
