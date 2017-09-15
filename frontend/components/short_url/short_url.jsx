import React from 'react';

class ShortUrl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shortUrl = this.props.shortUrl;
    return (
      <div className="short-url-container">
        <span>{shortUrl.long_url}</span>
        <span>{shortUrl.created_at} ago</span>
        <span>{shortUrl.short_url}</span>
        <span>{shortUrl.views}</span>
      </div>
    )
  }
}

export default ShortUrl;
