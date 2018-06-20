import React from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';

const chatAppBackEndUrl = 'http://ec2-18-188-75-130.us-east-2.compute.amazonaws.com:3000'

class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // this.props.serviceAddress is passed in by the service deployer when it is deployed
    const namespace = this.props.serviceAddress || 'preview'

    console.log('namespace:', namespace)

    // Connect to the server
    this.socket = io(chatAppBackEndUrl + '/' + namespace, {
      query: `username=${props.username}`
    }).connect();

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      currentTime: Date.now(),
      message
    };

    // Emit the message to the server
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="Chat-app-wrapper">
        <div className="Chat-chat-header">
          Connect.
        </div>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}

ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
