

const defaultState = {
  entities: []
}

const ShortUrlReducer = ( state = defaultState, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case "expression":

      break;
    default:
      return state;
  }
}

export default ShortUrlReducer;
