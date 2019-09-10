import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';

const API = "http://localhost:3000"

class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="tile is-ancestor">
          <Sidebar user={this.state.user}/>
        </div>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
