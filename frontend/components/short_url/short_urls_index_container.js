import { connect } from 'react-redux';
import ShortUrlsIndex from './short_urls_index';
import { requestShortUrls, requestMostViews } from '../../actions/short_url_actions';

const mapStateToProps = ({ shortUrl }) => {
  return {
    shortUrl: shortUrl.entities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestShortUrls: () => dispatch(requestShortUrls()),
    requestMostViews: () => dispatch(requestMostViews()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortUrlsIndex)
