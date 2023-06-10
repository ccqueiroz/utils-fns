import { lunhMod11Algorithm } from './../src/lib/lunhMod11Algorithm/index';
describe('[UTILS: LUNH_MOD10_ALGORITHM]', () => {
  it('Should be return false when not passed value in argument digits', () => {
    expect(lunhMod11Algorithm({ digits: '' })).toBeFalsy();
  });
  it('Should be return null when digits arguments are passed, but is not format number', () => {
    expect(lunhMod11Algorithm({ digits: 'foo-bar' })).toBeFalsy();
  });
  it('Should be return value result algorithm when passed digits valid', () => {
    expect(lunhMod11Algorithm({ digits: '0019050095' })).toBe(6);
    expect(lunhMod11Algorithm({ digits: [0, 0, 1, 9, 0, 5, 0, 0, 9, 5] })).toBe(
      6,
    );
    expect(
      lunhMod11Algorithm({
        digits: ['0', '0', '1', '9', '0', '5', '0', '0', '9', '5'],
      }),
    ).toBe(6);
  });
  it('Should be returning the result from calculations where the array or char items are numeric formatted.', () => {
    expect(lunhMod11Algorithm({ digits: 'abcd0019050095-' })).toBe(6);
    expect(
      lunhMod11Algorithm({ digits: [0, 0, 1, 9, 0, 5, 0, 0, 9, 'k', 'd', 5] }),
    ).toBe(6);
    expect(
      lunhMod11Algorithm({
        digits: ['a', '0', 'j', '0', '1', '9', '0', '5', '0', '0', '9', '5'],
      }),
    ).toBe(6);
  });
  it('Should be return value result algorithm when passed digits valid and reverseNumbers to be false.', () => {
    expect(
      lunhMod11Algorithm({ digits: '0019050095', reverseNumbers: false }),
    ).toBe(4);
  });
});
