import DATA from '../data';
import axios from 'axios';
const DND_BASE_URL = "https://www.dnd5eapi.co/api";

export default class Character {

  constructor(updateCharacter){

    this.updateCharacter = updateCharacter;
    this.character_name = "Character Name";
    this.character_info = {
      class: "",
      background: "",
      player_name: "Jared Tanner",
      race: "",
      alignment: "",
      exp_points: 0
    }
    this.appearance = {
      age: 23,
      height: "6ft, 3in",
      weight: "178lbs",
      eyes: "Blue",
      skin: "Red",
      hair: "Auburn"
    }
    this.abilities = [
      { // STR
        name: 'strength',
        score: 0,
        skills: [
          {
            name: 'saving throws',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'athletics',
            hasSkill: false,
            modifier: 0
          }
        ]
      },
      { // DEX
        name: 'dexterity',
        score: 0,
        skills: [
          {
            name: 'saving throws',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'acrobatics',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'sleight of hand',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'stealth',
            hasSkill: false,
            modifier: 0
          }
        ]
      },
      { // CON
        name: 'constitution',
        score: 14,
        skills: [
          {
            name: 'saving throws',
            hasSkill: false,
            modifier: 0
          }
        ]
      },
      { // INT
        name: 'inteligence',
        score: 14,
        skills: [
          {
            name: 'saving throws',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'arcana',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'history',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'investigation',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'nature',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'religion',
            hasSkill: false,
            modifier: 0
          }
        ]
      },
      { // WIS
        name: 'wisdom',
        score: 14,
        skills: [
          {
            name: 'saving throws',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'animal handling',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'insight',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'medicine',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'perception',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'survival',
            hasSkill: false,
            modifier: 0
          }
        ]
      },
      { // CHA
        name: 'charisma',
        score: 12,
        skills: [
          {
            name: 'saving throws',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'deception',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'intimidation',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'performance',
            hasSkill: false,
            modifier: 0
          },
          {
            name: 'persuasion',
            hasSkill: false,
            modifier: 0
          }
        ]
      }
    ];
    this.smAbilities = [
      {
        score: 2,
        name: 'proficiency bonus'
      },
      {
        score: 1,
        name: 'inspiration'
      },
      {
        score: 0,
        name: 'passive wisdom (perception)'
      }
    ];
    this.battleStats = {
      armor_class: {
        name: 'armor class',
        value: 15
      },
      initiative: {
        name: 'initiative',
        value: 0
      },
      speed: {
        name: 'speed',
        value: 0
      },
      hit_points: {
        name: 'current hit points',
        value: 0,
        max: { maxName: 'hit point maximum', maxValue: 22 }
      },
      temp_hit_points: {
        name: 'temporary hit points',
        value: 0
      },
      hit_dice: {
        name: 'hit dice',
        value: 'D10',
        max: { maxName: 'total', maxValue: 1 }
      },
      death_saves: {
        successes: 0,
        failures: 2
      }
    };
    this.attributes = [
      {
        content: [],
        title: "personality traits",
        columns: 1,
        lines: 4
      },
      {
        content: [],
        title: "ideals",
        columns: 1,
        lines: 3
      },
      {
        content: [],
        title: "bonds",
        columns: 1,
        lines: 3
      },
      {
        content: [],
        title: "flaws",
        columns: 1,
        lines: 3
      }
    ];
    this.textBoxes = {
      languages: {
        content: [],
        title: "Other Proficiencies & Languages",
        columns: 1,
        lines: 10
      },
      equipment: {
        content: [],
        title: "Equipment & Character Notes",
        columns: 2,
        lines: 10
      },
      features: {
        content: [],
        title: 'features & traits',
        columns: 1,
        lines: 15
      },
      attacks: {
        attacks: [
          {
            name: '',
            atkBonus: 0,
            dmg: [0, 0, 0], // _d_+_
            dmgType: ''
          },
          {
            name: '',
            atkBonus: 0,
            dmg: [0, 0, 0],
            dmgType: ''
          },
          {
            name: '',
            atkBonus: 0,
            dmg: [0, 0, 0],
            dmgType: ''
          }
        ],
        content: [],
        title: "attacks & spellcasting",
        columns: 1,
        lines: 10
      }
    }



    this.spellStats = {
      spell_save_DC: 0,
      spellcasting_ability: 0,
      spell_attack_bonus: 0
    }

  }

  /**
   * utility methods
   */
  randomFromList(array){
    let rand = Math.floor(Math.random() * array.length);
    return array[rand];
  }

  rollDice(numTimes, numFaces){
    let total = 0;
    for (let i = 0; i < numTimes; i++){
      total += ( Math.floor(Math.random() * numFaces) + 1 );
    }
    return total;
  }
  
  bubble(numbers){ //bubble sort that I wrote for a toy problem
    let done = false;
    
    for (var j = 0; !done; j++){
      done = true;
      for (let i = 0; i < numbers.length - 1; i++){
        if (numbers[i] > numbers[i+1]){
          //swap numbers
          let temp = numbers[i];
          numbers[i] = numbers[i+1];
          numbers[i+1] = temp;
          done = false;
        }
      }
    }
    return numbers;
  }

  getModifier(score){
    return Math.floor((score - 10) / 2);
  }

  getShorthandAbilities(){
    let result = {};
    this.abilities.map( a => {
      result[a.name.split('').slice(0,3).join('')] = a.score;
    });
    return result;
  }

  /**
   * random-generation methods
   */
  randomClass(index){
    axios.get(`${DND_BASE_URL}/classes/${index}`).then( response => {

      // set up data
      let { name, hit_die } = response.data
      let { battleStats, character_info } = this

      let abs = this.getShorthandAbilities()

      // assign data
      character_info.class = name;
      battleStats.hit_points.max.maxValue = hit_die + this.getModifier(abs.con)
      battleStats.hit_points.value = hit_die + this.getModifier(abs.con)
      battleStats.hit_dice.value = `D${hit_die}`
      battleStats.hit_dice.max.maxValue = 1

      // spellCasting Stuff - NEEDS UPDATING - not currently in use
      switch (this.character_info.class) {
        case 'Barbarian':
          this.spellStats.spellcasting_ability = '-';
          break;
        case 'Wizard':
        case 'Fighter':
        case 'Rogue':
          this.spellStats.spellcasting_ability = this.getModifier(abs.int);
          break;
        case 'Bard':
        case 'Paladin':
        case 'Sorcerer':
        case 'Warlock':
        this.spellStats.spellcasting_ability = this.getModifier(abs.cha);
          break;
        case 'Cleric':
        case 'Druid':
        case 'Monk':
        case 'Ranger':
        this.spellStats.spellcasting_ability = this.getModifier(abs.wis);
          break;
        default:
          console.log('not a valid class'); 
      };

      if (this.spellStats.spellcasting_ability === '-'){
        this.spellStats.spell_save_DC = '-';
        this.spellStats.spell_attack_bonus = '-';
      } else {
        this.spellStats.spell_save_DC = 8 + this.battleStats.proficiency_bonus;
        this.spellStats.spell_attack_bonus = this.battleStats.proficiency_bonus + this.spellStats.spellcasting_ability;
      }

      this.updateCharacter(this)

    }).catch( () => 
    { console.log("Failed to get class") }
    );
  }

  randomRace(index){

    axios.get(`${DND_BASE_URL}/races/${index}`).then( response => {

      // set up
      let { ability_bonuses, name, speed } = response.data;

      // assign data
      let { character_info, abilities, battleStats, smAbilities } = this;
      character_info.race = name;
      battleStats.speed.value = speed;

      abilities.forEach((ab, i) => {
        ab.score += ability_bonuses[i]
      })

      let dex = abilities.find(a => a.name === "dexterity").score
      let wis = abilities.find(a => a.name === "wisdom").score

      battleStats.armor_class.value = this.getModifier(dex) + 10;
      smAbilities[2].score = this.getModifier(wis) + 10;
      battleStats.initiative.value = this.getModifier(dex);

      this.updateCharacter(this); // function passed into from App, bound to app

    }).catch( () => 
    { console.log("Failed to get race") }
    );

  }

  // returns result of rolling 4d6, and taking the heighest 3
  randomAbility(){
    let rolls = [];
    for (let i = 0; i < 4; i++){
      rolls.push(this.rollDice(1, 6));
    }

    rolls = this.bubble(rolls); // sort to take highest 3
    return rolls[1] + rolls[2] + rolls[3];
  }

  randomAlignment(){
    const first = this.randomFromList([ "Lawful", "Nuetral", "Chaotic" ]);
    const second = this.randomFromList([ "Good", "Nuetral", "Evil" ]);

    if (first === second){
      return "True-Nuetral";
    } else{
      return `${first}-${second}`;
    }
  }

  randomize(){
    
    let { abilities, character_info, smAbilities, appearance } = this
    let { backgrounds, characterNames, eyeColors, skinColors, hairColors } = DATA

    // abilities
    abilities.forEach(ability => {
      let num = this.randomAbility();
      ability.score = num;
      ability.skills.forEach(skill => {
        skill.modifier += this.getModifier(num);
      });
    });
    
    // // race, speed, ability bonuses, AC, passive perception, initiative
    this.randomRace(this.rollDice(1, 9)); // 9 races

    // // class, hitpoints, spellstats
    this.randomClass(this.rollDice(1, 12)); // 12 classes

    // background
    character_info.background = this.randomFromList(backgrounds);

    // alignment
    character_info.alignment = this.randomAlignment();

    // character name
    this.character_name = this.randomFromList(characterNames);

    // exp points, proficiency bonus
    character_info.exp_points = '0'; // always level one (for now)
    smAbilities[0].score = 2;

    // appearancs - NEED TO MAKE DYNAMIC BASED ON RACE - not currently in use
    appearance.age = Math.floor(Math.random() * 180) + 20;
    appearance.height = 4 + (Math.floor(Math.random() * 30) / 10);
    appearance.weight = Math.floor(Math.random() * 140) + 60;
    appearance.eyes = this.randomFromList(eyeColors);
    appearance.skin = this.randomFromList(skinColors);
    appearance.hair = this.randomFromList(hairColors);

  }
}