import React from 'react';
import { useState } from 'react';
import './style.css';

function changeName() {
  //const [data, setData] = useState(' Main Headline');
  const [data, setData] = useState(1);
  function updateData() {
    //setData('Update Headline');
    setData(data + 1);
  }
  return (
    <div className="Lessons">
      <h1>{data}</h1>
      <button onClick={updateData}>Update</button>
    </div>
  );
}
export default changeName;
