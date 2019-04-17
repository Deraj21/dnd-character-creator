import React from 'react';

import Stat from './Stat'
import DeathSaves from './DeathSaves'

export default function BattleStats(props){

  let { armor_class, initiative, speed, hit_points, temp_hit_points, hit_dice, death_saves } = props.battleStats;

  return (
    <div className="BattleStats gray-box">
      <div className="row">
        <Stat data={armor_class}/>
        <Stat data={initiative}/>
        <Stat data={speed}/>
      </div>

      <Stat data={hit_points}/>
      <Stat data={temp_hit_points}/>

      <div className="row">
        <Stat data={hit_dice}/>
        <DeathSaves data={death_saves}/>
      </div>
      
    </div>
  )
}
