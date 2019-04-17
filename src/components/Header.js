import React from 'react'

export default function Header(props){

  let { info, character_name } = props;
  let attributes1 = []
  let attributes2 = []
  let i = 1;

  for (let key in info){
    let className = key.split('_');
    let pText = className.join(' ');
    className = className.join('-');

    if (i > 3) {
      attributes2.push(
        <div className="attribute" key={key}>
          <p className="hand">{info[key]}</p>
          <p>{pText}</p>
        </div>
      )
      i++
    } else {
      attributes1.push(
        <div className="attribute" key={key}>
          <p className="hand">{info[key]}</p>
          <p>{pText}</p>
        </div>
      )
      i++
    }
  }

  return (
    <div className="Header">
      <div className="left">
        <h2>DUNGEONS & DRAGONS</h2>
        <div className="character-name white-box">
          <p className="hand">{character_name}</p>
          <p>character name</p>
        </div>
      </div>
      <div className="white-box attributes-box">
        <div className="attributes">
          { attributes1 }
        </div>
        <div className="attributes">
          { attributes2 }
        </div>
      </div>
    </div>
  );
}