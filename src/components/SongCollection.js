import React from 'react'
import Song from './Song'

class SongCollection extends React.Component {

  render() {

    const allSongs = this.props.allSongs.map((song, index) => {
      return <Song key={song.id} songIndex={index} songInfo={song} playSong={this.props.playSong} />
    })

    const playlistSongs = this.props.songList.map((song, index) => {
      return (
        <Song
          key={song.song_id}
          songIndex={index}
          songInfo={song}
          playSong={this.props.playSong}
          removeSongFromPlaylist={this.props.removeSongFromPlaylist}
        />
      )
    })

    const recommendedSongs = this.props.recommendedSongs.map((song,index) => {
      return (
        <Song
          key={song.id}
          songIndex={index}
          songInfo={song}
          playSong={this.props.playSong}
          showPlaylist={this.props.showPlaylist}
          addSongToPlaylist={this.props.addSongToPlaylist}
        />
      )
    })

    return (
      <div id="SongCollection">
        { (this.props.showPlaylist) ?
          (
            <div className="special-songs">
              <p>Playlist Songs</p>
              { playlistSongs }
            </div>
          ) : allSongs
        }
        { this.props.showPlaylist ?
          (
            <div className="special-songs">
              <p>Recommended Songs </p>
              { recommendedSongs }
            </div>
          ) : null
        }
      </div>
    )
  }


}

export default SongCollection;
