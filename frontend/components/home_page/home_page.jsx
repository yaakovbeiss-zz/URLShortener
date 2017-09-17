import React from 'react';
import Shortener from '../shortener/shortener_container';
import ShortUrlsIndex from '../short_url/short_urls_index_container';
import MostViewedUrlsIndex from '../short_url/most_viewed_urls_index_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'recent',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    return e => {
      this.setState({ selected: field })
    }
  }

  className(field) {
    return this.state.selected === field ? "button selected" : "button"
  }

  urlsIndex() {
    if (this.state.selected === 'recent') {
      return <ShortUrlsIndex />
    } else {
      return <MostViewedUrlsIndex />
    }
  }

  render() {
    return (
      <div className="home-page">
        <Shortener />
        <section className="index-container">
          <button className={this.className('recent')} onClick={this.handleClick('recent')}>Most Recent</button>
          <button className={this.className('mostClicks')} onClick={this.handleClick('mostClicks')}>Most Clicks</button>
        </section>
            {this.urlsIndex()}
      </div>
    )
  }
}

export default HomePage;
