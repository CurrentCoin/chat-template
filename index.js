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
      <div className="row chat-wrapper">
        <div className="col">
          <img className="homepage-logo" src={currentCoinLogo} alt="CurrentCoin" />

          {
            this.state.submitted
              // Form was submitted, now show the main App
              ? <ChatApp username={this.state.username} { ...this.props } />

              // Initial page load, show a simple login form
              : (
                <div className="col full-width">
                  <div className="header">
                    Chat with <em>your</em> people.
                  </div>

                  <form
                    className="username-form col"
                    onSubmit={ this.usernameSubmitHandler }
                  >
                    <label className="username-label">
                      Your Username
                    </label>
                    <input
                      className="username-input"
                      type="text"
                      onChange={this.usernameChangeHandler}
                    />

                    <button
                      className="submit-button"
                      type="submit"
                    >
                      Join
                    </button>
                  </form>
                </div>
              )
          }

        </div>
        <img src={chatNowImage} className="chatnow" alt="Connect." />
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
