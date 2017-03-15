import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import apiMiddleware from './middlewares/callAPI';
import rootReducer from './reducers';
import wrapperHeader from './middlewares/wrapperHeader';


export default function configureStore(initialState) {
  const logger = createLogger();
  const store = applyMiddleware(thunk,
    wrapperHeader,
    apiMiddleware,
    logger)(createStore)(rootReducer, initialState);

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
