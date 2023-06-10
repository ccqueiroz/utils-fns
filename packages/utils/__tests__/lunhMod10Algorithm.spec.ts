import { lunhMod10Algorithm } from './../src/lib/lunhMod10Algorithm/index';
describe('[UTILS: LUNH_MOD10_ALGORITHM]', () => {
  it('Should be return false when not passed value in argument digits', () => {
    expect(lunhMod10Algorithm({ digits: '' })).toBeFalsy();
  });
  it('Should be return null when digits arguments are passed, but is not format number', () => {
    expect(lunhMod10Algorithm({ digits: 'foo-bar' })).toBeFalsy();
  });
  it('Should be return true algorithm when passed digits valid and onlyValidCheckDigit to be true', () => {
    expect(
      lunhMod10Algorithm({ digits: '0019050095', onlyValidCheckDigit: true }),
    ).toBeTruthy();
    expect(
      lunhMod10Algorithm({ digits: '0019050095', onlyValidCheckDigit: false }),
    ).toBeFalsy();
  });
  it('Should be return true algorithm when passed digits valid and onlyValidCheckDigit to be false', () => {
    expect(
      lunhMod10Algorithm({
        digits: '4024007164357039',
        onlyValidCheckDigit: false,
      }),
    ).toBeTruthy();
    expect(
      lunhMod10Algorithm({
        digits: '4024007164357039',
        onlyValidCheckDigit: true,
      }),
    ).toBeTruthy();
  });
  it('Should be return true algorithm when passed digits valid and reverseNumbers to be true', () => {
    expect(
      lunhMod10Algorithm({
        digits: '4532705136701706',
        reverseNumbers: true,
      }),
    ).toBeTruthy();
    expect(
      lunhMod10Algorithm({
        digits: '4532 7051 3670 1706',
        reverseNumbers: false,
      }),
    ).toBeFalsy();
  });
});
