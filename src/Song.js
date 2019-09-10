import React from 'react'

class Song extends React.Component {

  render() {
    // console.log(this.props.playSong)
    return (
      <div onClick={() => this.props.playSong(this.props.songInfo)} className="song" >
        <p>{this.props.songInfo.name}</p>
        <p>{this.props.songInfo.artist_name}</p>
        <p>{this.props.songInfo.genre}</p>
        <p>{this.props.songInfo.year}</p>
      </div>
    )
  }

}

export default Song;
