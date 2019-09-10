import React, { Component } from 'react';

class UserInfo extends Component {

  render() {
    return (
      <div className="content has-text-grey-light">
        <div className="columns is-gapless">
          <div className="column is-4">
            <figure className="image is-32x32">
              <img src="https://bulma.io/images/placeholders/32x32.png" />
            </figure>
          </div>
          <div className="column is-8">
            <span>Jaxi Guzman</span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo
