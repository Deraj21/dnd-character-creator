import React from 'react';

export default function SmallAbility(props){

  let { name, score } = props;

  return (
    <div className="SmallAbility">
      <div className="score white-box hand"><h3>{score}</h3></div>
      <div className="name white-box"><p>{name}</p></div>
    </div>
  );
}
