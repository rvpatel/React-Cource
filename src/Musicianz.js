import React from 'react';

function Musicianz(props) {
  return (
    <>
      <h1>Headline Top {props.name}</h1>
      <h2>Headline Second</h2>
      {props.list.first}
      {props.list.second}
    </>
  );
}
export default Musicianz;
