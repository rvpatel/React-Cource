import React from 'react';
import React, { Component } from 'react';
import Musician from './Musician';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'A R Rahman',
    };
  }
  render() {
    return (
      <div>
        <h1>Props Class</h1>
        <Musician name={this.state.name} />
        <button onClick={() => this.setState({ name: 'Kumar' })}>Change</button>
      </div>
    );
  }
}
export default App;
