import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import HelloWorld from '../containers/hello-world';
import HelloReact from '../containers/hello-react';
import Login from '../containers/login';

export default(
  <Router history={browserHistory}>
    <Route path="/" component={HelloWorld} />
    <Route path="login" component={Login} />
    <Route path="hello-react" component={HelloReact} />
  </Router>
);
