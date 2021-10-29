import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Musicianz from './Musicianz';
import './style.css';

function App() {
  const [name, setName] = useState('Blogs');

  return (
    <div className="App">
      <p>Good Morning :)</p>
      <Musicianz
        name={name}
        list={{ first: 'First blog', second: 'Second blog' }}
      />

      <p>
        <button
          onClick={() => {
            setName('News');
          }}
        >
          Check
        </button>
      </p>
    </div>
  );
}
export default App;
