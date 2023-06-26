import { stateRegistrationSergipe } from '../../src/lib/stateRegistrationValidator/states/SE/index';
describe('[VALIDATORS: STATE_REGISTRATION_SERGIPE]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Sergipe', () => {
    expect(stateRegistrationSergipe('')).toBeFalsy();
    expect(stateRegistrationSergipe('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationSergipe('218355732')).toBeFalsy();
    expect(stateRegistrationSergipe('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationSergipe('271234563')).toBeTruthy();
    expect(stateRegistrationSergipe('577324594')).toBeTruthy();
  });
});
