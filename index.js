import React from 'react';
import ChatApp from './ChatApp';
import {Glyphicon, Col, Row, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return ([
        <ChatApp key="0" username={this.state.username} />,
        <link key="1" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />,
        <link key="2" rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
      ]);
    }

    // Initial page load, show a simple login form
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />

        <Col xs={6} md={6}>
          <Row className="show-grid">
              <div><img  className="homepage-logo" src={ require('./logo.64cad023.svg')} alt="CurrentCoin"/></div>
          </Row>

          <Row className="show-grid">
            <Col xs={7} md={7}>
              <div className="enter-id">
                <form onSubmit={this.usernameSubmitHandler} className="username-container">
                  <FormGroup controlId="formControlsTextarea">
                   <Row className="show-grid">
                    <div id="input-header">
                      <h1>Chat with <em>your</em> people.</h1>
                    </div>
                    <div id="input-instructions">
                      <ControlLabel>Your username</ControlLabel>
                    </div>
                    <div id="user-id-input-textbox">
                      <FormControl
                        type="text"
                        placeholder="User42"
                        onChange={this.usernameChangeHandler}
                      />
                    </div>
                    </Row>
                    <Row className="show-grid" id="join-chat-button-row">
                      {/* bsStyle="" */}
                      <Button type="submit" id="join-chat-button" bsSize="large" style={ {background: 'white', color: '0b42b2', }} bsClass="btn">Join<Glyphicon glyph="glyphicon glyphicon-chevron-right" /></Button>
                    </Row>
                  </FormGroup>
              </form>
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

App.defaultProps = {
};

export default App;
