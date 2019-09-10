// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Musicplayer from './Musicplayer'
import SongCollection from './SongCollection'
import Sidebar from './components/Sidebar';
const API = "http://localhost:3000"
const URL = 'http://localhost:3000/songs';

class App extends Component {

  state = {
    allSongs: [],
    user: null,
    currentSong: {},
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(songData => {
      this.setState({ allSongs: songData })
    })
  }

  playSong = (song) => {
    // console.log(song)
    this.setState({ currentSong: song })
  }

  /*
  <footer class="footer">
  <div class="content has-text-centered">
  <p>
  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
  </p>
  </div>
  </footer>*/
  
  render() {
    return (
      <React.Fragment>
        <div className="tile is-ancestor">
          <Sidebar user={this.state.user}/>
        </div>
        <div className="App">
          <h1 id="title"> ~ Wayvi ~ </h1>
          <SongCollection allSongs={this.state.allSongs} playSong={this.playSong} />
          <Musicplayer currentSong={this.state.currentSong} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
