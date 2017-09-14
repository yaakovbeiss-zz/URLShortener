class ShortUrl < ApplicationRecord

  validates :short_url, :long_url, :views, presence: true, uniqueness: true

end
