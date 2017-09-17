import React from 'react';
import ShortUrl from './short_url';

class MostViewedUrlsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      selected: 'created_at'
    }
  }

  componentDidMount() {
    this.props.requestMostViews();
  }

  render() {
    const shortUrls = this.props.shortUrl;
    return (
      <urlsIndex className="urls-index-container">
        <section className="urls-index-container-header">
          <span className="first-column">Original URL</span>
          <span className="second-column">Last Viewed</span>
          <span className="third-column">Short URL</span>
          <span onClick={this.handleClick} value="views" className="fourth-column">All Clicks</span>
        </section>
        {shortUrls.map((shortUrl) => <ShortUrl key={shortUrl.id} shortUrl={shortUrl} order={'mostViews'} />)}
      </urlsIndex>
    )
  }
}

export default MostViewedUrlsIndex;
