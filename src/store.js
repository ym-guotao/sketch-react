import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import apiMiddleware from './middlewares/callAPI';
import rootReducer from './reducers';


export default function configureStore(initialState) {
  const logger = createLogger();
  const mid = applyMiddleware(thunk, apiMiddleware, logger);
  const store = mid(createStore)(rootReducer, initialState);

  if(module.hot) {
    module.hot.accept('./reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('./reducers/index').default;
      /* eslint-enable global-require */

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
