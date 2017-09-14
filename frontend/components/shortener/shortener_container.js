import { connect } from 'react-redux';
import Shortener from './shortener';
import { createShortUrl } from '../../actions/short_url_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    createShortUrl: (shortUrl) => dispatch(createShortUrl(shortUrl)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Shortener);
