import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SocketEnvelope extends Component {
  componentDidMount() {
    const { url, onMessage } = this.props;
    this.setState({ socket: new WebSocket(url) }, () => {
      this.state.socket.onmessage = onMessage;
    });
  }

  componentDidUpdate(prevProps) {
    const { envelope, formatEnvelope } = this.props;

    if (envelope.timestamp !== prevProps.envelope.timestamp) {
      this.state.socket.send(formatEnvelope(envelope));
    }
  }

  componentWillUnmount() {
    this.state.socket.close();
  }

  render() {
    return <span></span>;
  }
}

SocketEnvelope.propTypes = {
  url: PropTypes.string.isRequired,
  envelope: PropTypes.object,
  onMessage: PropTypes.func.isRequired,
  formatEnvelope: PropTypes.func.isRequired
};
