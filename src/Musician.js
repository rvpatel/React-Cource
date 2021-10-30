import React from 'react';
import React, { Component } from 'react';

class Musician extends Component {
  render() {
    return (
      <div>
        <h1>Musician {this.props.name}</h1>
      </div>
    );
  }
}
export default Musician;
