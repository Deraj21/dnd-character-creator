import React from 'react'

export default function TextBox(props){
  let { className, data } = props
  let { content, title, columns, lines, attacks } = data;

  if (attacks){
    attacks = attacks.map((atk, i) => 
      {
        return (
          (atk.name)
          ?
          <tr className="attack" key={i}>
            <td className="hand">{atk.name}</td>
            <td className="hand">{`+${atk.atkBonus}`}</td>
            <td className="hand">{`${atk.dmg[0]}d${atk.dmg[1]}+${atk.dmg[2]} ${atk.dmgType}`}</td>
          </tr>
          :
          <tr className="attack" key={i}>
            <td className="hand">{'-'}</td>
            <td className="hand">{' '}</td>
            <td className="hand">{' '}</td>
          </tr>
        )
      }
    )
  }

  let col1 = [];
  for (let i = 0; i < lines; i++){
    col1.push(
      <p className="text-line hand" key={i}>{content[i] ? `- ${content[i]}` : `- `}</p>
    )
  }
  let col2 = []
  if (columns > 1){
    for (let i = lines; i< lines*2; i++){
      col2.push(
        <p className="text-line hand"key={i}>{content[i] ? `- ${content[i]}` : `- `}</p>
      )
    }
  }

  return (
    <div className={`TextBox white-box` + (className ? ` ${className}` : '')}>
      {
        attacks
        ?
        <table className="attacks"><tbody>
          <tr>
            <td>name</td>
            <td>atk bonus</td>
            <td>dmg/type</td>
          </tr>
          { attacks }
        </tbody></table>
        :
        <div></div>
      }

      <div className="col">
        { col1 }
      </div>
      <div className="col">
        { col2 }
      </div>
      <p className="title">{ title.toUpperCase() }</p>
    </div>
  );
}