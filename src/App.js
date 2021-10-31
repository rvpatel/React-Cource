import React, { useState } from 'react';

import './style.css';

export default function App() {
  const [data, setData] = useState(false);
  const [print, SetPrint] = useState('Ahmedabad');

  function getData(val) {
    SetPrint(val.target.value);
    setData(val.target.value);
  }

  return (
    <div>
      <p>Input box Code :</p>
      {data ? <h1>{data}</h1> : print}
      <input name="city" type="text" onChange={getData} />
      <button onClick={() => setData(!data)}>Toggle</button>
    </div>
  );
}
