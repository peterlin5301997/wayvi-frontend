import React from 'react'

class Musicplayer extends React.Component {

  componentDidUpdate() {
    this.refs.player.load();
  }

  render() {
    // console.log(this.props.currentSong)
    return (
      <div id="musicplayer">
        <div id="songInfo">
          <span className="songTitle">{this.props.currentSong.name}</span> <br/>
          <span className="songArtist">{this.props.currentSong.artist_name}</span>
        </div>
        <audio controls autoPlay ref="player">
          <source src={this.props.currentSong.path} type="audio/mp3"/>
        </audio>
      </div>
    )
  }
}

export default Musicplayer;
