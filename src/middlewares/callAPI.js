import {normalize} from 'normalizr';


// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if(typeof callAPI === 'undefined') {
    return next(action);
  }

  let {endpoint} = callAPI;
  const {types, schema, method = 'GET', body } = callAPI;

  if(!endpoint) {
    throw new Error('Endpoint is missing.');
  }
  if(typeof endpoint === 'string') {
    const options = {
      method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${store.getState().session.token}`.trim(),
        'Content-Type': 'application/json',
      },
    };

    if(body) options.body = JSON.stringify(body);
    endpoint = fetch(endpoint, options).then(response =>
      response.json().then(json => {
        if(!response.ok) {
          return Promise.reject(json);
        }

        return json;
      })
    );
  }
  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if(!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return endpoint
    .then(data => next(actionWith({
      payload: schema ? normalize(data, schema) : data,
      type: successType,
    })))
    .catch(err => next(actionWith({
      type: failureType,
      error: err || {message: 'Something bad happened'},
    })));
};
