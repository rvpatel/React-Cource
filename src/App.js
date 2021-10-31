import React, { useState } from 'react';

import './style.css';

export default function App() {
  const [data, setData] = useState(null);
  const [print, SetPrint] = useState(false);

  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div>
      <p>Input box Code :</p>
      {print ? <h1>{data}</h1> : null}
      <input name="city" type="text" onChange={getData} />
      <button onClick={() => SetPrint(true)}>Set value</button>
    </div>
  );
}
