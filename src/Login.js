import React, { useState } from 'react';

function Login() {
  const [User, setUser] = useState(' ');
  const [Password, setPassword] = useState('');
  function LoginHandle(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={LoginHandle}>
        <input type="text" Placeholder="Enter Password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
