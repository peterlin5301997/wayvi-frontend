import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <div className="content has-text-grey-light">
        Please Login:
        <form>
          <input id="username" type="text" placeholder="User Name" />
          <input id="password" type="password" placeholder="Password" />
        </form>
      </div>
    );
  }
}

export default Login
