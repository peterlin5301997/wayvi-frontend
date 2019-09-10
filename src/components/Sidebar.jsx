import React, { Component } from 'react';
import Login from './Login';
import UserInfo from './UserInfo';

class Sidebar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tile is-2 is-parent">
        <article className="tile is-child notification has-background-black">
          <div className="content has-text-grey-light">
            <p>Playlists</p>
            <p>Wedding</p>
            <p>Funeral</p>
            <p>Birthday</p>
          </div>
            <Login />
            <UserInfo />
        </article>
      </div>
    );
  }
}

export default Sidebar;
