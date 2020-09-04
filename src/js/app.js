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
        if (step === 1) throw new Error();
        if (profile.name === name) {
          result.add(profile.name);
          step += 1;
        }
      } catch (e) {
        throw new Error(`Существуют два аналогичных персонажа ${name}`);
      }
      return result;
    }, new Set());
  }

  addAll(...rest) {
    const test1 = new Character();
    this.members = test1.profiles.reduce((result, profile) => {
      rest.forEach((element) => {
        if (profile.name === element) result.add(profile.name);
      });
      return result;
    }, new Set());
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}


const test1 = new Team();
test1.add('Bowman');
console.log(test1.members);
test1.addAll('Bowman', 'Bowman', 'Magican', 'Swordman', 'Magican');
console.log(test1.members);
test1.toArray();
console.log(test1.members);


export default Team;
