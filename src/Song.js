import React from 'react'

class Song extends React.Component {

  render() {
    // console.log(this.props.playSong)
    return (
      <div onClick={() => this.props.playSong(this.props.songInfo)} className="song" >
        <p>Name: {this.props.songInfo.name}</p>
        <p>Artist: {this.props.songInfo.artist_name}</p>
        <p>Genre: {this.props.songInfo.genre}</p>
        <p>Year: {this.props.songInfo.year}</p>
      </div>
    )
  }

}

export default Song;
