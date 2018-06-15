import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class Message extends React.Component {
  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';
    const rightNow = Date.now();
    const currentTime = this.props.rightNow;
    // if the date is today, show "Today" "5:00 pm"
    // else if the date was sent yesterday, show "June 12, 2018" "5:00 pm"
    return (
      <div className={`message ${fromMe}`}>
        <div className='username'>
          { this.props.username }
        </div>
        <div className='message-datetime'>
          <Moment>{ this.props.rightNow }</Moment>
        </div>
        <div className='message-body'>
          { this.props.message }
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  username: '',
  currentTime: '¿Que es esto?',
  fromMe: false
};

export default Message;
