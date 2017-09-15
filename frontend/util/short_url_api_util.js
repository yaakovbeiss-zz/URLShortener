export const fetchShortUrls = () => (
  $.ajax({
    method: 'GET',
    url: `api/short_urls/`
  })
);

export const fetchMostViews = () => (
  $.ajax({
    method: 'GET',
    url: `api/most_views/`
  })
);

export const createShortUrl = (short_url) => (
  $.ajax({
    method: 'POST',
    url: 'api/short_urls',
    data: { short_url }
  })
)
