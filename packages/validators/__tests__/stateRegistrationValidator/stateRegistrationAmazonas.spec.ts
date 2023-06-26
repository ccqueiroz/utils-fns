import { stateRegistrationAmazonas } from '../../src/lib/stateRegistrationValidator/states/AM/index';
describe('[VALIDATORS: STATE_REGISTRATION_AMAZONAS]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Amazonas', () => {
    expect(stateRegistrationAmazonas('')).toBeFalsy();
    expect(stateRegistrationAmazonas('abcd98')).toBeFalsy();
    expect(stateRegistrationAmazonas('218355732')).toBeFalsy();
    expect(stateRegistrationAmazonas('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationAmazonas('712780530')).toBeTruthy();
    expect(stateRegistrationAmazonas('980282969')).toBeTruthy();
  });
});
