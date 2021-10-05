import './style.css';
import React from 'react';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //data: ' Default Lable',
      data: 1,
    };
  }

  lessons() {
    //this.setState({ data: 'Updated headline' });
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.lessons()}>Update</button>
      </div>
    );
  }
}
export default App;
