import { stateRegistrationParana } from '../../src/lib/stateRegistrationValidator/states/PR/index';
describe('[VALIDATORS: STATE_REGISTRATION_PARANA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Paraná', () => {
    expect(stateRegistrationParana('')).toBeFalsy();
    expect(stateRegistrationParana('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationParana('218355732')).toBeFalsy();
    expect(stateRegistrationParana('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationParana('1234567850')).toBeTruthy();
    expect(stateRegistrationParana('3162985832')).toBeTruthy();
  });
});
