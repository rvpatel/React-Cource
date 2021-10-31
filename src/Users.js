import React, { Component } from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      email: 'test@gmail.com',
    };
  }
  render() {
    return (
      <div>
        <h1>Users Components {this.props.name}</h1>

        <h1>Users Email {this.state.email}</h1>

        <button onClick={() => this.setState({ email: 'new@test.com' })}>
          Email
        </button>
      </div>
    );
  }
}

export default Users;
