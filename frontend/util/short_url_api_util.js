export const fetchShortUrls = () => (
  $.ajax({
    method: 'GET',
    url: `api/shortUrls/`
  })
);

export const createShortUrl = (shortUrl) => (
  $.ajax({
    method: 'POST',
    url: 'api/shortUrls',
    data: { shortUrl }
  })
)
