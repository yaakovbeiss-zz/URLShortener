import React from 'react';

class Shortener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long_url: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  sanitizeUrl(longUrl) {
    let sanitizedUrl = $.trim(longUrl);

    sanitizedUrl = sanitizedUrl.toLowerCase(sanitizedUrl).replace(/(https?:\/\/)|(www\.)/, "");
    if (sanitizedUrl[sanitizedUrl.length - 1] == "/") {
      sanitizedUrl = sanitizedUrl.slice(sanitizedUrl.length - 1);
    }
    return `http://${sanitizedUrl}`
  }

  handleSubmit(e) {
    e.preventDefault();
    const long_url = this.sanitizeUrl(this.state.long_url);
    this.props.createShortUrl({long_url});
  }

  render() {
    return (
      <div>
        <section className="shortener-container">
          <section className="shortener">
            <h1>Simplify your links</h1>
          <form className="shortener-form">
            <input type="text"
              className="shortener-input"
              onChange={this.update('long_url')}
              placeholder="Your original URL here"
              />
            <button className="shortener-button" onClick={this.handleSubmit}>SHORTEN URL</button>
          </form>
          </section>
        </section>
      </div>
    )
  }
}

export default Shortener;
