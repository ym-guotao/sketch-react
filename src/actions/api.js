import {schema} from 'normalizr';
import {browserHistory} from 'react-router';
import {CALL_API} from '../middlewares/callAPI';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
} from '../constants';


function callFakeAPI(data) {
  return Promise.resolve(data);
}

export const messageSchema = new schema.Entity('messages');

export function restoreSessionFromLocalStorage() {
  if(localStorage.getItem('session')) {
    const session = JSON.parse(localStorage.getItem('session'));
    if(session.auth) {
      return {
        type: LOGIN_SUCCESS,
        payload: JSON.parse(localStorage.getItem('session')),
      };
    }
  }

  return {
    type: 'DO_NOTHING'
  };
}

export function login(data) {
  return async (dispatch) => {
    const action = await dispatch({
      [CALL_API]: {
        endpoint: callFakeAPI(data),     // url or function
        method: 'POST',
        body: JSON.stringify(data),
        types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
      },
    });

    if(action.type === LOGIN_SUCCESS) {
      localStorage.setItem('session', JSON.stringify(action.payload));
      browserHistory.push(action.payload.next);
    }
    return action;
  };
}

export function logout() {
  localStorage.removeItem('session');
  browserHistory.push('/login');
  return {
    type: LOGOUT,
  };
}

export function getMessage() {
  return {
    [CALL_API]: {
      endpoint: callFakeAPI({id: '12121212', content: 'Welcome to 36node.'}),     // url or function
      method: 'POST',
      schema: messageSchema,
      types: [GET_MESSAGE_REQUEST, GET_MESSAGE_SUCCESS, GET_MESSAGE_FAIL],
    }
  };
}
