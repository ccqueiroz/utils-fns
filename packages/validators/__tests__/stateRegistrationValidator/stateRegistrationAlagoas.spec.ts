import { stateRegistrationAlagoas } from './../../src/lib/stateRegistrationValidator/states/AL/index';
describe('[VALIDATORS: STATE_REGISTRATION_ALAGOAS]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Alagoas', () => {
    expect(stateRegistrationAlagoas('')).toBeFalsy();
    expect(stateRegistrationAlagoas('abcd98')).toBeFalsy();
    expect(stateRegistrationAlagoas('218355732')).toBeFalsy();
    expect(stateRegistrationAlagoas('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationAlagoas('248355732')).toBeTruthy();
    expect(stateRegistrationAlagoas('248278460')).toBeTruthy();
  });
});
