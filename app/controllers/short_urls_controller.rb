class ShortUrlsController < ApplicationController

  def show
    #find record by id by converting :short_url param back to base 10
    id = params[:short_url].to_i(36)
    short_url = ShortUrl.find(id)
    new_view_count = short_url.views + 1
    short_url.update(views: new_view_count)
    debugger
    redirect_to short_url.long_url

  end

end
