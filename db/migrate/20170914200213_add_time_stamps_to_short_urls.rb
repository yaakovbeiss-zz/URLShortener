class AddTimeStampsToShortUrls < ActiveRecord::Migration[5.0]
  def change
    add_timestamps(:short_urls)
  end
end
