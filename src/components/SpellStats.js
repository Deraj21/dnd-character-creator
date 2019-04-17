import React, { Component } from 'react';

export default class SpellStats extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render(){
    let { spellStats } = this.props;
    const stats = [];

    for (let key in spellStats){
      // parse key
      let className = key.split('_');
      let pText = className.join(' ');
      className = className.join('-');

      stats.push(
        <div className={className} key={key}>
          <h2>{spellStats[key]}</h2>
          <p>{pText}</p>
        </div>
      )
    }

    return (
      <div className="spell-stats box">
        <h3>Spell Stats</h3>
        { stats }
      </div>
    )
  }
}