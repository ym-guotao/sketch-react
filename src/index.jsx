import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes/';

var a = b;

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
