import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store';
import HelloWorld from './containers/hello-world';
import HelloReact from './containers/hello-react';
import Login from './containers/login';
// import routes from './routes/';

// start app
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HelloWorld} />
      <Route path="login" component={Login} />
      <Route path="hello-react" component={HelloReact} />
    </Router>
  </Provider>, document.getElementById('root')
);
