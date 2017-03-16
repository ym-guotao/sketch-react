import {GET_MESSAGE_REQUEST, GET_MESSAGE_SUCCESS, GET_MESSAGE_FAIL} from '../constants';

const initialState = {
  isFetching: false,
  result: 'no-match'
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE_REQUEST:
      return Object.assign({}, state, {isFetching: true});
    case GET_MESSAGE_SUCCESS:
      return Object.assign({}, state, {isFetching: false, result: action.payload.result});
    case GET_MESSAGE_FAIL:
      return Object.assign({}, state, {isFetching: false, result: 'no-match'});
    default:
      return state;
  }
}
