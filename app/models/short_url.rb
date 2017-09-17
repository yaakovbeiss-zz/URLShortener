class ShortUrl < ApplicationRecord

  validates :long_url, presence: true, uniqueness: true
  validates :views, presence: true

  def shorten_url
    # create short URL be converting ID of record into base 32
      short_url = self.id.to_s(36)
      "https://minifi.herokuapp.com/#{short_url}"
  end

end
