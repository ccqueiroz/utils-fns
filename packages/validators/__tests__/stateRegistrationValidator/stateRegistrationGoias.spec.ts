import { stateRegistrationGoias } from '../../src/lib/stateRegistrationValidator/states/GO/index';
describe('[VALIDATORS: STATE_REGISTRATION_GOIAS]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Goiás', () => {
    expect(stateRegistrationGoias('')).toBeFalsy();
    expect(stateRegistrationGoias('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationGoias('218355732')).toBeFalsy();
    expect(stateRegistrationGoias('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationGoias('100378676')).toBeTruthy();
    expect(stateRegistrationGoias('111399190')).toBeTruthy();
  });
});
