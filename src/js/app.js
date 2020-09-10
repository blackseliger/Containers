/* eslint-disable linebreak-style */
// TODO: write your code here
class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    try {
      if (this.members.has(name) === true) throw new Error();
      this.members.add(name);
    } catch (e) {
      throw new Error('Такой персонаж уже есть в списке');
    }
  }

  addAll(...rest) {
    rest.forEach((element) => this.members.add(element));
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}

export default Team;
