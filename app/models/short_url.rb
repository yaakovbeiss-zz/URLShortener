class ShortUrl < ApplicationRecord

  validates :short_url, :long_url, presence: true, uniqueness: true
  validates :views, presence: true

  def self.shorten_url(long_url)
    short_url = SecureRandom.urlsafe_base64(5)
  end

end
