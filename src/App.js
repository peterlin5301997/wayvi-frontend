import React from 'react';
import logo from './logo.svg';
import './App.css';
import Musicplayer from './Musicplayer'
import SongCollection from './SongCollection'

const URL = 'http://localhost:3000/songs';

class App extends React.Component {

  state = {
    allSongs: [],
    currentUser: "",
    currentSong: "",
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(songData => {
      this.setState({ allSongs: songData })
    })
  }

  playSong = (song) => {
    // console.log(song.path)
    this.setState({ currentSong: song.path })
  }

  render() {
    return (
      <div className="App">
        <h1 id="title"> ~ Wayvi ~ </h1>
        <SongCollection allSongs={this.state.allSongs} playSong={this.playSong} />
        <Musicplayer currentSong={this.state.currentSong} />
      </div>
    )
  }
}

export default App;
