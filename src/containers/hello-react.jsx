import React, { Component } from 'react';
import {Link} from 'react-router';

import './hello-react.less';

export default class HelloReact extends Component {
  constructor() {
    super();
    this.greeting = 'react';
  }
  render() {
    return (
      <div className="hello_react">
        <h2>This is hello {this.greeting} page.</h2>
        <Link to={'/'}>back to hello world page.</Link>
      </div>
    );
  }
}
