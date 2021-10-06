import React from 'react';
import ReactDOM from 'react-dom';
import { add, mult } from './Numbers';

ReactDOM.render(
  <>
    <ul>
      <li>Sum = {add(10, 9)}</li>
      <li>Mult = {mult(10, 9)}</li>
    </ul>
  </>,
  document.getElementById('root')
);
