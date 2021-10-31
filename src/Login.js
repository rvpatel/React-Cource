import React, { useState } from 'react';
import validator from 'validator';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pssErr, setPassErr] = useState(false);

  function LoginHandle(e) {
    e.preventDefault();
  }

  function UserHandle(e) {
    e.preventDefault();
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter valid Email!');
    }
  }

  function passHandle(e) {
    let pass = e.target.value;
    if (validator.isStrongPassword(pass)) {
      setEmailError('Valid Pass :)');
    } else {
      setEmailError('Enter strong!');
    }
  }

  return (
    <div style={{ backgroundColor: '#909090', padding: '20px' }}>
      <h1>Login</h1>
      <form onSubmit={LoginHandle}>
        <input type="text" Placeholder="Enter Email ID" onChange={UserHandle} />
        <input type="text" Placeholder="Enter Password" onChange={passHandle} />
        <br />
        {emailError}
        <br />
        {pssErr}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
