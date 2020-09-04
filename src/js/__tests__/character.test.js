/* eslint-disable linebreak-style */
import Character from '../character';

describe('check class Character', () => {
  test('check return array of profiles', () => {
    const expected = [
      { name: 'Bowman' },
      { name: 'Swordman' },
      { name: 'Swordman' },
      { name: 'Magican' },
    ];
    const test1 = new Character();
    const received = test1.profiles;
    expect(received).toEqual(expected);
  });
});
