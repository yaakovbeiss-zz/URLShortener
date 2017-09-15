require 'base64'

class ShortUrl < ApplicationRecord

  validates :long_url, presence: true, uniqueness: true
  validates :views, presence: true

  def shorten_url
      short_url = self.id.to_s(36)
      "#{short_url}"
  end

end
