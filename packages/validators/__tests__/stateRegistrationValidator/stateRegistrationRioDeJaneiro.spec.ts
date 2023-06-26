import { stateRegistrationRioDeJaneiro } from '../../src/lib/stateRegistrationValidator/states/RJ/index';
describe('[VALIDATORS: STATE_REGISTRATION_RIO_DE_JANEIRO]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Rio de Janeiro', () => {
    expect(stateRegistrationRioDeJaneiro('')).toBeFalsy();
    expect(stateRegistrationRioDeJaneiro('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationRioDeJaneiro('218355732')).toBeFalsy();
    expect(
      stateRegistrationRioDeJaneiro('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationRioDeJaneiro('02936860')).toBeTruthy();
    expect(stateRegistrationRioDeJaneiro('91872170')).toBeTruthy();
  });
});
