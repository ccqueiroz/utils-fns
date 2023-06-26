import { stateRegistrationAmapa } from '../../src/lib/stateRegistrationValidator/states/AP/index';
describe('[VALIDATORS: STATE_REGISTRATION_AMAPA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Amapá', () => {
    expect(stateRegistrationAmapa('')).toBeFalsy();
    expect(stateRegistrationAmapa('abcd98')).toBeFalsy();
    expect(stateRegistrationAmapa('218355732')).toBeFalsy();
    expect(stateRegistrationAmapa('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationAmapa('038021820')).toBeTruthy();
    expect(stateRegistrationAmapa('031735304')).toBeTruthy();
  });
});
