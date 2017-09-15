import { RECEIVE_SHORT_URL, RECEIVE_SHORT_URLS } from '../actions/short_url_actions';

const defaultState = {
  entities: []
}

const ShortUrlReducer = ( state = defaultState, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SHORT_URLS:

      return Object.assign({}, state, {
        entities: action.shortUrls
      })
      break;

    default:
      return state;
  }
}

export default ShortUrlReducer;
