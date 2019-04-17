import React from 'react';

export default function Stat(props){

  let { name, value, max } = props.data;

  if (max){
    var maxComponent = (
      <div className="max">
        <p>{max.maxName}</p> <p className="hand">{max.maxValue}</p>
      </div>
    )
  }

  return (
    <div className="Stat white-box">
      {
        max
        ?
        maxComponent
        :
        ''
      }
      <h2 className="hand">{value}</h2>
      <p>{name}</p>
    </div>
  );
}

