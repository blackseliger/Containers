/* eslint-disable linebreak-style */
// TODO: write your code here
import Character from './character';

class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    const test1 = new Character();
    let step = 0;
    this.members = test1.profiles.reduce((result, profile) => {
      try {
        if (step === 1) throw new Error('Существуют два аналогичных персонажа');
        if (profile.name === name) {
          result.add(profile.name);
          step += 1;
        }
      } catch (e) {
        console.error(e);
      }
      return result;
    }, new Set());
  }

  addAll(...rest) {
    const test1 = new Character();
    for (let i = 0; i < rest.length; i += 1) {
        console.log(rest[i]);
      this.members = test1.profiles.reduce((result, profile) => {
        if (profile.name === rest[i]) {
          result.add(profile.name);
        }
        return result;
      }, new Set());
    }
  }
}


const test1 = new Team();
// test1.add('Bowman');
console.log(test1.members);
test1.addAll('Bowman', 'Bowman', 'Magican', 'Swordman');
console.log(test1.members);

// console.log(test1);
// Character {profiles: Array(2)}
// profiles: (2) [{…}, {…}]
// __proto__: Object
// console.log(test1.profiles);
// [{…}, {…}]0: {name: "Bowman"}1: {name: "Swordman"}length: 2__proto__: Array(0)
