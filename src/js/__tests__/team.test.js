/* eslint-disable linebreak-style */
import Team from '../app';
import Character from '../character';

describe('check Team', () => {
  test('check work add => return added profile', () => {
    const expected = true;
    const test1 = new Team();
    test1.add('Bowman');
    const received = test1.members.has('Bowman');
    expect(received).toEqual(expected);
  });
  test('check word addAll => return added profiles', () => {
    const expected = ['Bowman', 'Swordman', 'Magican'];
    const test1 = new Team();
    test1.addAll('Bowman', 'Bowman', 'Magican', 'Swordman', 'Magican');
    test1.members = Array.from(test1.members);
    const received = test1.members;
    expect(received).toEqual(expected);
  });
  test('check return array of method toArray if activated some method: add or addAll', () => {
    const expected = ['Bowman', 'Swordman', 'Magican'];
    const test1 = new Team();
    test1.addAll('Bowman', 'Bowman', 'Magican', 'Swordman', 'Magican');
    test1.toArray();
    const received = test1.members;
    expect(received).toEqual(expected);
  });
  test('check return error of method add', () => {
    const test1 = new Team();
    test1.addAll('Bowman', 'Bowman', 'Magican', 'Swordman', 'Magican');
    expect(() => {
      test1.add('Bowman');
    }).toThrow();
  });
});
