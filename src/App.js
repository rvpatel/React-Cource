import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [tnc, setTnc] = useState(true);
  const [favi, setfavi] = useState('');

  function getFormdata(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Social media Platform</h1>
      <form onSelect={getFormdata}>
        <input type="text" placeholder="Enter Name" name="name" value={name} />
        <br />
        <select
          onChange={(e) => {
            setfavi(e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="Facebook">Facebook</option>
          <option value="Linked-in">Linked-in</option>
        </select>
        <br />
        <input
          type="checkbox"
          placeholder="Term"
          name="term"
          onChange={(e) => setTnc(e.target.checked)}
        />
        Term & conditon
        <br />
        <button>Select</button>
      </form>
    </div>
  );
}
