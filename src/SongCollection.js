import React from 'react'
import Song from './Song'

class SongCollection extends React.Component {

  render() {
    // console.log(this.props.allSongs)
    const allSongs = this.props.allSongs.map(song => {
      return <Song key={song.id} songInfo={song} playSong={this.props.playSong} />
    })

    return (
      <div>
        {allSongs}
      </div>
    )
  }


}

export default SongCollection;
