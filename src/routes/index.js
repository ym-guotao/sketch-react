import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Home from '../containers/home';
import Login from '../containers/login';

export default(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
  </Router>
);
