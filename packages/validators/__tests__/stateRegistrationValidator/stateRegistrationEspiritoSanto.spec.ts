import { stateRegistrationEspiritoSanto } from '../../src/lib/stateRegistrationValidator/states/ES/index';
describe('[VALIDATORS: STATE_REGISTRATION_ESPIRITO_SANTO]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Espírito Santo', () => {
    expect(stateRegistrationEspiritoSanto('')).toBeFalsy();
    expect(stateRegistrationEspiritoSanto('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationEspiritoSanto('218355732')).toBeFalsy();
    expect(
      stateRegistrationEspiritoSanto('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationEspiritoSanto('903776219')).toBeTruthy();
    expect(stateRegistrationEspiritoSanto('031824650')).toBeTruthy();
  });
});
