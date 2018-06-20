import React from 'react';

import './index.css'
import ChatApp from './ChatApp';
import currentCoinLogo from './logo.64cad023.svg'
import chatNowImage from './chatnow.png'

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
    return (
      <div className="Chat-row Chat-wrapper">
        <div className="Chat-col">
          <img className="Chat-homepage-logo" src={currentCoinLogo} alt="CurrentCoin" />

          {
            this.state.submitted
              // Form was submitted, now show the main App
              ? <ChatApp username={this.state.username} { ...this.props } />

              // Initial page load, show a simple login form
              : (
                <div className="Chat-col Chat-full-width">
                  <div className="Chat-header">
                    Chat with <em>your</em> people.
                  </div>

                  <form
                    className="Chat-sername-form Chat-col"
                    onSubmit={ this.usernameSubmitHandler }
                  >
                    <label className="Chat-username-label">
                      Your Username
                    </label>
                    <input
                      className="Chat-input"
                      type="text"
                      onChange={this.usernameChangeHandler}
                    />

                    <button
                      className="Chat-submit-button"
                      type="submit"
                    >
                      Join
                    </button>
                  </form>
                </div>
              )
          }

        </div>
        <img src={chatNowImage} className="Chat-chatnow" alt="Connect." />
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
