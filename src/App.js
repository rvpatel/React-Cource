import React from 'react';
import ReactDOM from 'ReactDOM';
import './style.css';

const heading = {
  color: 'brown',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 3px 5px #ffee9c',
};

export default function App() {
  return (
    <div>
      <h1 style={heading}>Hello, Ravikumar</h1>
      <h2
        style={{
          color: 'red',
          textAlign: 'center',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          textShadow: '0px 3px 5px #ffee9c',
        }}
      >
        Inline Css
      </h2>
      <p>Good Morning :)</p>
    </div>
  );
}
