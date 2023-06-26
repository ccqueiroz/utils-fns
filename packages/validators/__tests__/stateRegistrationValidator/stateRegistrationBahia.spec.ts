import { stateRegistrationBahia } from '../../src/lib/stateRegistrationValidator/states/BA/index';
describe('[VALIDATORS: STATE_REGISTRATION_BAHIA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Bahia', () => {
    expect(stateRegistrationBahia('')).toBeFalsy();
    expect(stateRegistrationBahia('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationBahia('218355732')).toBeFalsy();
    expect(stateRegistrationBahia('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationBahia('12345663')).toBeTruthy();
    expect(stateRegistrationBahia('137357347')).toBeTruthy();
  });
});
