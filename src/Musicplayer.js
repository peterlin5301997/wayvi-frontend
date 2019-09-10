import React from 'react'

class Musicplayer extends React.Component {

  componentDidUpdate() {
    this.refs.player.pause();
    this.refs.player.load();
    this.refs.player.play();
  }

  render() {
    console.log(this.props.currentSong)
    return (
      <div id="musicplayer">
        <audio controls ref="player">
          <source src={this.props.currentSong} type="audio/mp3"/>
        </audio>
      </div>
    )
  }
}

export default Musicplayer;
