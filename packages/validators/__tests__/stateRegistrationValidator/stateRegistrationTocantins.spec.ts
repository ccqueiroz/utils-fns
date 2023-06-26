import { stateRegistrationTocantins } from '../../src/lib/stateRegistrationValidator/states/TO/index';
describe('[VALIDATORS: STATE_REGISTRATION_TOCANTINS]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Tocantins', () => {
    expect(stateRegistrationTocantins('')).toBeFalsy();
    expect(stateRegistrationTocantins('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationTocantins('218355732')).toBeFalsy();
    expect(
      stateRegistrationTocantins('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationTocantins('29010227836')).toBeTruthy();
    expect(stateRegistrationTocantins('55032439401')).toBeTruthy();
  });
});
