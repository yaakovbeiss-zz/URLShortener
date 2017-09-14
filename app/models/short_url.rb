class ShortUrl < ApplicationRecord

  validates :short_url, :long_url, :views, presence: true, uniqueness: true

  def self.shorten_url(long_url)
    short_url = SecureRandom.urlsafe_base64(5)
  end

end
