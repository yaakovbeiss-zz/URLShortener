class ShortUrl < ApplicationRecord

  validates :short_url, :long_url, presence: true, uniqueness: true
  validates :views, presence: true

  def self.shorten_url(long_url)
    loop do
      short_url = SecureRandom.base58(5)
      return "minifi.herokuapp.com/#{short_url}" unless ShortUrl.exists?(short_url: short_url)
    end
  end

end
