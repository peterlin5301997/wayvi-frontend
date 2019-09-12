import React, { Component } from 'react';

class Playlist extends Component {
  render() {
    return (
      <div className="playlist" onClick={() => this.props.showPlaylist(this.props.playlist)} >
        {this.props.playlist.name}
      </div>
    );
  }
}

export default Playlist;
