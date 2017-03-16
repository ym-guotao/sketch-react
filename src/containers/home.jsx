import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMessage } from '../actions/api';
import Hello from '../components/hello';
import { selectMsg } from '../selectors';


const mapStateToProps = state => ({
  message: selectMsg(state),
});
const mapDispatchToProps = dispatch => bindActionCreators({ getMessage }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends Component {
  static defaultProps = {
    message: 'Welcome to hello world page.'
  }

  static propTypes = {
    getMessage: PropTypes.func.isRequired,
    message: PropTypes.string
  }

  constructor() {
    super();
    this.a = 'heelo'; // no use, just for example
  }

  componentDidMount() {
    this.props.getMessage();
  }

  render() {
    return (
      <Hello msg={this.props.message} />
    );
  }
}
