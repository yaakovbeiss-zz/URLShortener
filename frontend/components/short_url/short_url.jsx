import React from 'react';

class ShortUrl extends React.Component {
  constructor(props) {
    super(props);
  }

  condensedUrl() {
    const longUrl = this.props.shortUrl.long_url
    if ( longUrl.length > 30) {
      return `${longUrl.slice(0, 30)}...`
    } else {
      return longUrl
    }
  }
  render() {
    const shortUrl = this.props.shortUrl;
    return (
      <div className="short-url-container">
        <span><a  href={shortUrl.long_url} target="_blank">{this.condensedUrl()}</a></span>
        <span>{shortUrl.created_at} ago</span>
        <span><a href={shortUrl.short_url} target="_blank">{shortUrl.short_url}</a></span>
        <span>{shortUrl.views}</span>
      </div>
    )
  }
}

export default ShortUrl;
