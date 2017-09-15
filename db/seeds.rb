# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

suckr = ImageSuckr::GoogleSuckr.new

20.times do |i|
  random_views = rand(100)
  ShortUrl.create({ long_url: suckr.get_image_url, views: random_views })
end
