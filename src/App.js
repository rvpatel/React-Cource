import React, { useState } from 'react';
import './style.css';
import Users from './Users';
import User1 from './User1';

export default function App() {
  const [name, setName] = useState('React Next');

  return (
    <div>
      <Users name={name} />
      <button onClick={() => setName(' React Next Plan')}>Update Name</button>
    </div>
  );
}
