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
          <span className="first-column">Original URL</span>
          <span className="second-column">Created</span>
          <span className="third-column">Short URL</span>
          <span className="fourth-column">All Clicks</span>
        </section>
        {shortUrls.map((shortUrl) => <ShortUrl key={shortUrl.id} shortUrl={shortUrl} />)}
      </urlsIndex>
    )
  }
}

export default ShortUrlsIndex;
