import React from 'react';
import Moment from 'react-moment';

class Message extends React.Component {
  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'Chat-from-me' : '';

    // if the date is today, show "Today" "5:00 pm"
    // else if the date was sent yesterday, show "June 12, 2018" "5:00 pm"
    return (
      <div className={`Chat-message ${fromMe}`}>
        <div className='Chat-row Chat-message-row'>
          <div className='Chat-username'>
            { this.props.username }
          </div>
          <div className='Chat-message-datetime'>
            <Moment
              fromNow
              interval={30000}
            >
              { this.props.currentTime }
            </Moment>
          </div>
        </div>
        <div className='Chat-message-body'>
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
