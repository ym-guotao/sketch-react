import React from 'react';
import {Route, Router} from 'react-router';
import HelloWorld from '../containers/hello-world';
import HelloReact from '../containers/hello-react';
import Login from '../containers/login';

export default(
  <Router>
    <Route path="/" component={HelloWorld} />
    <Route path="/login" component={Login} />
    <Route path="hello-react" component={HelloReact} />
  </Router>
);
