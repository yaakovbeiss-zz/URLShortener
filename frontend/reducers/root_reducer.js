import { combineReducers } from 'redux';
import ShortUrlReducer from './short_url_reducer';

export default combineReducers({
  shortUrl: ShortUrlReducer
})
