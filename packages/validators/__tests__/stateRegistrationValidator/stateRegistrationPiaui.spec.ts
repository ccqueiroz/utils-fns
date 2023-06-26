import { stateRegistrationPiaui } from '../../src/lib/stateRegistrationValidator/states/PI/index';
describe('[VALIDATORS: STATE_REGISTRATION_PIAUI]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Piauí', () => {
    expect(stateRegistrationPiaui('')).toBeFalsy();
    expect(stateRegistrationPiaui('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationPiaui('218355732')).toBeFalsy();
    expect(stateRegistrationPiaui('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationPiaui('192997530')).toBeTruthy();
    expect(stateRegistrationPiaui('989711480')).toBeTruthy();
  });
});
