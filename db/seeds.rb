# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'nokogiri'

  require 'openssl'
  require 'open-uri'
  doc = Nokogiri::HTML(open('http://stuffgate.com/stuff/website/top-1000-sites', :ssl_verify_mode => OpenSSL::SSL::VERIFY_NONE))
  urls = doc.xpath("//tbody//tr//td//a")
  urls.each do |url|
    new_url = url.children.text
    random_views = rand(1000)

    
    short_url = ShortUrl.new({ long_url: new_url, views: random_views })
    if short_url.save
      short_url.short_url = short_url.shorten_url
      short_url.save
    end

  end
