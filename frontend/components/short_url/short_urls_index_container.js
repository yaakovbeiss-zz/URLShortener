import { connect } from 'react-redux';
import ShortUrlsIndex from './short_urls_index';
import { requestShortUrls } from '../../actions/short_url_actions';

const mapStateToProps = ({ shortUrl }) => {
  return {
    shortUrl: shortUrl.entities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestShortUrls: () => dispatch(requestShortUrls())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortUrlsIndex)
