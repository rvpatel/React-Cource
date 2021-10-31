import React from 'react';
import './style.css';

const App = () => {
  let time = new Date();
  return (
    <div>
      <h1>Time: {time.toLocaleTimeString()} </h1>
      <h1>Date: {time.getDate()} </h1>
      <h1>Month: {time.getMonth()} </h1>
      <h1>Year: {time.getFullYear()} </h1>
    </div>
  );
};
export default App;
