class RemoveNullConstraintForShortUrl < ActiveRecord::Migration[5.0]
  def change
    change_column_null :short_urls, :short_url, true
  end
end
