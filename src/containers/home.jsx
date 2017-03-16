import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getMessage, logout} from '../actions/api';
import Hello from '../components/hello';
import {selectEmail, selectMsg} from '../selectors';


const mapStateToProps = state => ({
  email: selectEmail(state),
  message: selectMsg(state),
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {getMessage, logout},
  dispatch
);

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends Component {
  static defaultProps = {
    message: 'Welcome to hello world page. Fetching your message...'
  }

  static propTypes = {
    getMessage: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    message: PropTypes.string,
    email: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.getMessage();
  }

  onClick() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <Hello msg={this.props.message} email={this.props.email} />
        <button onClick={this.onClick}>
          Logout
        </button>
      </div>
    );
  }
}
