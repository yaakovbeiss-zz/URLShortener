import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class ShortUrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      copied: false,
    }
  }

  condensedUrl() {
    const longUrl = this.props.shortUrl.long_url
    if ( longUrl.length > 30) {
      return `${longUrl.slice(0, 30)}...`
    } else {
      return longUrl
    }
  }

  handleClick() {

  }

  render() {
    const shortUrl = this.props.shortUrl;
    return (
      <div className="short-url-container">
        <span className="first-column"><a href={shortUrl.long_url} target="_blank">{this.condensedUrl()}</a></span>
        <span className="second-column">{shortUrl.created_at} ago</span>
        <span className="third-column"><a href={'https://' + shortUrl.short_url} target="_blank">{shortUrl.short_url}</a>
          <CopyToClipboard text={'https://' + this.props.shortUrl.short_url}
            onCopy={() => this.setState({copied: true})}>
            <img src="https://png.icons8.com/copy/androidL/24" title="Copy" width="24" height="24" />
          </CopyToClipboard>
        </span>
        <span className="fourth-column">{shortUrl.views}</span>
      </div>
    )
  }
}

export default ShortUrl;
