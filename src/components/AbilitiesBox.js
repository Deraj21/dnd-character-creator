import React from 'react'

import Ability from './Ability'
import SmallAbility from './SmallAbility'

export default function AbilitiesBox(props) {

  let { abilities, smAbilities, getModifier } = props;

  let abilityList = abilities.map((ability, i) => 
    <Ability data={ability} getModifier={getModifier} key={i} />
  );
  let smAbilityList = smAbilities.map((sm, i) => 
    <SmallAbility score={sm.score} name={sm.name} key={i} />
  )

  return (
    <div className="AbilitiesBox gray-box">
      { smAbilityList[0] }
      { smAbilityList[1] }
      { abilityList }
      { smAbilityList[2] }
    </div>
  );
}