import React from 'react';

export default function DeathSaves(props){
  let { successes, failures } = props.data;

  let checkBoxes = function(n){
    let result = [0, 0, 0]
    for (let i = 0; i < n; i++){
      result[i] = 1;
    }

    return result.map((item,i) => {
      return (
        <input type="checkbox" value={item} key={i}/>
      )
    })
  }

  return (
    <div className="DeathSaves white-box">
      <div className="row">
        <p>successes</p>
        { checkBoxes(successes) }
      </div>
      <div className="row">
        <p>failures</p>
        { checkBoxes(failures) }
      </div>
      <p>death saves</p>
    </div>
  );
}

