json.array! @short_urls.each do |short_url|
  json.id short_url.id
  json.short_url short_url.short_url
  json.long_url short_url.long_url
  json.views short_url.views
  json.created_at time_ago_in_words(short_url.created_at)
  json.updated_at time_ago_in_words(short_url.updated_at)
end
