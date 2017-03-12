import React from 'react';
import {Link} from 'react-router';
import logo from '../logo.svg';
import './hello-world.scss';


export default function HelloWorld() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to hello world page.</h2>
      </div>
      <p className="App-intro">
        <Link to="hello-react"> go to hello react page. </Link>
      </p>
    </div>
  );
}
