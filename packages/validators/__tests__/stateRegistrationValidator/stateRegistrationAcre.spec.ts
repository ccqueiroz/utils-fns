import { stateRegistrationAcre } from './../../src/lib/stateRegistrationValidator/states/AC/index';
describe('[VALIDATORS: STATE_REGISTRATION_ACRE]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Acre', () => {
    expect(stateRegistrationAcre('')).toBeFalsy();
    expect(stateRegistrationAcre('abcd98')).toBeFalsy();
    expect(stateRegistrationAcre('1006156928901')).toBeFalsy();
    expect(stateRegistrationAcre('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationAcre('0106156928901')).toBeTruthy();
    expect(stateRegistrationAcre('0146031398680')).toBeTruthy();
  });
});
