import React, { PropTypes } from 'react';
import logo from '../logo.svg';
import './hello.scss';


export default function HelloWorld(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{props.msg}</h2>
      </div>
    </div>
  );
}

HelloWorld.propTypes = {
  msg: PropTypes.string.isRequired
};
