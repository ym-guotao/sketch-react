import {browserHistory} from 'react-router';
import {CALL_API} from '../middlewares/callAPI';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../constants';


function fakeLoginAPI(data) {
  return Promise.resolve(data);
}

export function restoreSessionFromLocalStorage() {
  return {
    type: LOGIN_SUCCESS,
    payload: JSON.parse(localStorage.getItem('session')),
  };
}

export function login(data) {
  return async (dispatch) => {
    const action = await dispatch({
      [CALL_API]: {
        endpoint: fakeLoginAPI(data),     // url or function
        method: 'POST',
        body: JSON.stringify(data),
        types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
      },
    });

    if(action.type === LOGIN_SUCCESS) {
      localStorage.setItem('session', JSON.stringify(action.payload));
    }
    browserHistory.push('/');
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
