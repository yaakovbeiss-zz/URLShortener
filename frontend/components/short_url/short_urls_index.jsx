import React from 'react';
import ShortUrl from './short_url';

class ShortUrlsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestShortUrls();
  }

  render() {
    const shortUrls = this.props.shortUrl;
    return (
      <urlsIndex className="urls-index-container">
        {shortUrls.map((shortUrl) => <ShortUrl key={shortUrl.id} shortUrl={shortUrl} />)}
      </urlsIndex>
    )
  }
}

export default ShortUrlsIndex;
