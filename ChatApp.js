import React from 'react';
import io from 'socket.io-client';
import {Col, Row} from 'react-bootstrap';
import Messages from './Messages';
import ChatInput from './ChatInput';

const chatAppBackEndUrl = 'http://ec2-18-188-75-130.us-east-2.compute.amazonaws.com:3000'

class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    const namespace = this.props.serviceAddress || 'preview'
    const timestamp = Date.now();
    const currentTime = this.props.timestamp;

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
      currentTime: this.props.timestamp,
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
      <div>
        <Col xs={6} md={6}>
          <Row className="show-grid">
              <div><img  class="homepage-logo" src={ require('./logo.64cad023.svg')} alt="CurrentCoin"/></div>
          </Row>
        
          <Row className="show-grid">
              <Col xs={7} md={7}>
              <div className="chat-box">
                <h1>Connect.</h1>
                <Messages messages={this.state.messages} />
                <div>
                  <ChatInput onSend={this.sendHandler} />
                </div>
              </div>
          </Col> 
          </Row>  
        </Col>
        <Col>
            <div id="chatnow"> 
              <img src={ require('./chatnow.png')} alt="Connect."/>
            </div>
        </Col>
      </div>  
    );
  }

}

ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
