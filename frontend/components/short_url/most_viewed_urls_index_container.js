import { connect } from 'react-redux';
import MostViewedUrlsIndex from './most_viewed_urls_index';
import { requestMostViews } from '../../actions/short_url_actions';

const mapStateToProps = ({ shortUrl }) => {
  return {
    shortUrl: shortUrl.entities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestMostViews: () => dispatch(requestMostViews()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostViewedUrlsIndex)
