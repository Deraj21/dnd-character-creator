import React from 'react';

export default function Ability(props){

  let { getModifier, data } = props;
  let { name, score, skills } = data;

  let skillComponents = skills.map((skill, i) => {
    let { hasSkill, modifier, name } = skill
    return (
      <div className="skill" key={i}>
        <input type="checkbox" value={hasSkill}/>
        <p className="modifier">{`${(modifier >= 0 ? '+' : '' )}${modifier}`}</p>
        <p>{name}</p>
      </div>
    );
  })

  return (
    <div className="Ability">
      <div className="left white-box">
        <p className="score hand">{score}</p>
        <h2 className="modifier hand">{ `${(score > 9 ? '+' : '')} ${getModifier(score)}` }</h2>
        <p className="name">{name}</p>
      </div>
      <div className="right">
        { skillComponents }
      </div>
      
    </div>
  );
}
