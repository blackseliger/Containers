/* eslint-disable linebreak-style */
import Team from '../app';

describe('check Team', () => {
  test('check work add => return added profile', () => {
    const expected = true;
    const test1 = new Team();
    test1.add('Bowman');
    const received = test1.members.has('Bowman');
    expect(received).toBe(expected);
  });
  test('check word addAll => return added array! profiles', () => {
    const expected = ['Bowman', 'Swordman', 'Magican'];
    const test1 = new Team();
    test1.addAll('Bowman', 'Swordman', 'Magican', 'Magican');
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
