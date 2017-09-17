import React from 'react';
import ShortUrl from './short_url';

class ShortUrlsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      selected: 'created_at',
      startIndex: 0,
      endIndex: 10,
    }
    this.handlePrevTen = this.handlePrevTen.bind(this);
    this.handleNextTen = this.handleNextTen.bind(this);
  }

  componentDidMount() {
    this.props.requestShortUrls();
  }

  handleNextTen() {
    if (this.state.endIndex < this.props.shortUrl.length) {
      this.setState({ startIndex: this.state.startIndex + 10, endIndex: this.state.endIndex + 10})
    }
  }
  handlePrevTen() {
    if (this.state.endIndex > 10){
      this.setState({ startIndex: this.state.startIndex - 10, endIndex: this.state.endIndex - 10})
    }
  }

  render() {
    const shortUrls = this.props.shortUrl.slice(this.state.startIndex, this.state.endIndex);
    return (
      <urlsIndex className="urls-index-container">
        <section className="urls-index-container-header">
          <span className="first-column">Original URL</span>
          <span className="second-column">Created</span>
          <span className="third-column">Short URL</span>
          <span className="fourth-column">All Clicks</span>
        </section>
        {shortUrls.map((shortUrl) => <ShortUrl key={shortUrl.id} shortUrl={shortUrl} order={"recent"} />)}
        <section className="next-prev">
          <button onClick={this.handlePrevTen}>
            <img src={window.images.prev_arrow}></img>
          </button>
          {this.state.startIndex + 1} - {this.state.endIndex} of {this.props.shortUrl.length}
          <button onClick={this.handleNextTen}>
            <img src={window.images.next_arrow}></img>
          </button>
        </section>
      </urlsIndex>
    )
  }
}

export default ShortUrlsIndex;
