import React from 'react'

class Song extends React.Component {

  render() {

    return (
      <div className="song" >
        <div className="songDetail">
          <p className="songTitle">{this.props.songInfo.name}</p>
          <p className="songArtist">{this.props.songInfo.artist_name}</p>
        </div>
        <button onClick={() => this.props.playSong(this.props.songInfo, this.props.songIndex)}>Play</button>
        { this.props.showPlaylist ? <button onClick={() => this.props.addSongToPlaylist(this.props.songInfo)}>Add</button> : null }
      </div>
    )
  }

}

export default Song;
