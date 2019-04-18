import React, { Component } from 'react'
import './App.css'

import Character from './components/Character'
import Header from './components/Header'
import TextBox from './components/TextBox'
import AbilitiesBox from './components/AbilitiesBox'
import BattleStats from './components/BattleStats'

////////
// APP
////////

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      character: new Character(this.updateCharacter)
    }

    this.randomizeCharacter = this.randomizeCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
  }

  componentDidMount(){
    this.randomizeCharacter();
  }

  // this is going to be passed to the Character Class, so that it can make changes once it recieve certain data asynchronously
  updateCharacter(obj){
    this.setState({character: obj});
  }

  getModifier(score){
    return Math.floor((score - 10) / 2);
  }

  // when 'randomize' button is clicked
  randomizeCharacter(){
    // make blank character
    let randomCharacter = new Character(this.updateCharacter);
    randomCharacter.randomize();

    // quick note: no need to call setState() here, because it is being called in the 'updateCharacter' function that we sent to the character class, and used 'bind' to set the context to the App Component.
  }

  render() {

    let { character_info, character_name, abilities, smAbilities, battleStats, attributes, textBoxes } = this.state.character;
    let { languages, equipment, features, attacks } = textBoxes;

    // for attributes box
    attributes = attributes.map((item, i) => {
      return (
        <TextBox data={item} key={i}/>
      )
    })

    return (
      <div className="App">

        {/* Page 1 */}
        <div className="page page-1">
          <Header character_name={character_name} info={character_info}/>
          <div className="middle">
            <AbilitiesBox abilities={abilities} smAbilities={smAbilities} getModifier={this.getModifier} />
            <div className="middle-center">
              <BattleStats battleStats={battleStats} />
              <TextBox data={attacks} />
            </div>
            <div className="middle-right">
              <div className="gray-box"> { attributes } </div>
              <TextBox data={features} />
            </div>
          </div>
          <div className="footer">
            <TextBox className={'first'} data={languages} />
            <TextBox className={'second'} data={equipment} />
          </div>
        </div>

        {/* PAGE 2 */}
        {/* <Header character_name={character_name} info={appearance}/> */}

        {/* post-script */}
        <div className="post-script">
          <h4>Just a few things:</h4>
          <ol>
            <li>Thanks for checking out this project I made! Code can be found <a href="https://github.com/Deraj21/dnd-character-generator">here</a> on github. I will try to keep it up to date with the next feature I am working on</li>
            <li>Reload page to re- randomize</li>
            <li>Ctrl-P to print. Works best with Chrome browser. Make sure "background graphics" are on. Margins should be set to "default." Just print the first page, if you don't want this included</li>
          </ol>
        </div>

      </div>
    );
  }
}

export default App;
