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
        <section className="urls-index-container-header">
          <span>Original URL</span>
          <span>Created</span>
          <span>Short URL</span>
          <span>Visits</span>
        </section>
        {shortUrls.map((shortUrl) => <ShortUrl key={shortUrl.id} shortUrl={shortUrl} />)}
      </urlsIndex>
    )
  }
}

export default ShortUrlsIndex;
