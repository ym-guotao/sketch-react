import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getMessage, logout} from '../actions/api';
import Hello from '../components/hello';
import {selectEmail, selectMsg} from '../selectors';


const mapStateToProps = state => ({
  email: selectEmail(state) || 'anonymous',
  message: selectMsg(state) || 'fetching...',
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {getMessage, logout},
  dispatch
);

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends Component {
  static defaultProps = {
  }

  static propTypes = {
    getMessage: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getMessage();
    }, 1000);
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
