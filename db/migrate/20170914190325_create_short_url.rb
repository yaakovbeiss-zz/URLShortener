class CreateShortUrl < ActiveRecord::Migration[5.0]
  def change
    create_table :short_urls do |t|
      t.string :short_url, null: false
      t.string :long_url, null: false
      t.integer :views, null: false, default: 0

    end
    add_index :short_urls, :short_url, unique: true
  end
end
