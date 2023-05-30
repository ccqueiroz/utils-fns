import { utils } from '../src';

describe('[UTILS: LUNHALGORITHM]', () => {
  it('Should be return null when not passed value in argument', () => {
    expect(utils.luhnAlgorithm('')).toBe(null);
    expect(utils.luhnAlgorithm([])).toBe(null);
    expect(utils.luhnAlgorithm([1])).not.toBe(null);
  });
  it('Should be return null when value arguments are passed, but is not format number', () => {
    expect(utils.luhnAlgorithm('foo-bar')).toBe(null);
  });
  it('Should be return result algorithm when passed value valid', () => {
    expect(utils.luhnAlgorithm('135790')).toBe(22);
    expect(typeof utils.luhnAlgorithm('135790')).toBe('number');
  });
  it('Should be returning the result from calculations where the array or char items are numeric formatted.', () => {
    expect(utils.luhnAlgorithm('abc135790def-')).toBe(22);
    expect(
      utils.luhnAlgorithm([
        'a',
        'b',
        'c',
        '1',
        3,
        '5',
        7,
        '9',
        '0',
        'd',
        'ef',
        '-',
      ]),
    ).toBe(22);
  });
  it('Should be returning the result correctly when passed number array', () => {
    expect(utils.luhnAlgorithm([1, 3, 5, 7, 9, 0])).toBe(22);
  });
  it('Should be returning the result correctly when passed string array', () => {
    expect(utils.luhnAlgorithm(['1', '3', '5', '7', '9', 0])).toBe(22);
  });
});
