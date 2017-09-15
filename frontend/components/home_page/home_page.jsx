import React from 'react';
import Shortener from '../shortener/shortener_container';
import ShortUrlsIndex from '../short_url/short_urls_index_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Shortener />
          <ShortUrlsIndex />
      </div>
    )
  }
}

export default HomePage;
