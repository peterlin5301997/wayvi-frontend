import React, { Component } from 'react';
import Login from './Login';
import UserInfo from './UserInfo';

class Sidebar extends Component {

  render() {
    // console.log(this.props)
    return (
      <div className="tile is-2 is-parent">
        <article id="sidebar" className="tile is-child notification has-background-black">
          <div className="content has-text-grey-light">
          </div>
            {
              this.props.user ?
              <UserInfo
                user={this.props.user}
                playlists={this.props.playlists}
                showPlaylist={this.props.showPlaylist}
                addPlaylist={this.props.addPlaylist} /> :
              <Login login={this.props.login} />
            }
        </article>
      </div>
    );
  }
}

export default Sidebar;
