import React from 'react';
import Shortener from '../shortener/shortener_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Home Page

        <Shortener />
      </div>
    )
  }
}

export default HomePage;
