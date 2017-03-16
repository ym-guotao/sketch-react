import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import serialize from 'form-serialize';
import { locationShape } from 'react-router';
import { login } from '../actions/api';

const mapStateToProps = state => ({
  session: state.session,
});
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginPage extends Component {
  static defaultProps = {
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    location: locationShape.isRequired
  }

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = serialize(this.loginForm, { hash: true });
    const {next = '/'} = this.props.location.query;
    this.props.login(Object.assign({}, data, {next, auth: true}));
  }

  render() {
    return (
      <div>
        <a className="navbar-brand">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
            <path d="M 4 4 L 44 4 L 44 44 Z" fill="#F5F5F5" />
            <path d="M 4 4 L 34 4 L 24 24 Z" fill="rgba(0,0,0,0.15)" />
            <path d="M 4 4 L 24 4 L 4  44 Z" fill="#fcc100" />
          </svg>
          <span>Your App</span>
        </a>
        <div>
          <form role="form" ref={(loginForm) => { this.loginForm = loginForm; }} onSubmit={this.onSubmit}>
            <div>
              <input type="email" name="email" required="" placeholder="admin@36node.com" />
              <label htmlFor="email">邮箱</label>
            </div>
            <div>
              <input type="password" name="password" required="" />
              <label htmlFor="password">密码</label>
            </div>
            <button type="submit">登录</button>
          </form>
        </div>
      </div>
    );
  }
}
