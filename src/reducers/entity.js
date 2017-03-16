import merge from 'lodash/merge';

const initialState = {
  messages: {}
};

const entityReducer = (state = initialState, action) => {
  if(action.payload && action.payload.entities) {
    return merge({}, state, {...action.payload.entities});
  }

  return state;
};

export default entityReducer;
