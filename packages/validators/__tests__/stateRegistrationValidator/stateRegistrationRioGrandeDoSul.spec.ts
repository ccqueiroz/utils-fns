import { stateRegistrationRioGrandeDoSul } from '../../src/lib/stateRegistrationValidator/states/RS/index';
describe('[VALIDATORS: STATE_REGISTRATION_RIO_GRANDE_DO_SUL]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Rio Grande do Sul', () => {
    expect(stateRegistrationRioGrandeDoSul('')).toBeFalsy();
    expect(stateRegistrationRioGrandeDoSul('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationRioGrandeDoSul('218355732')).toBeFalsy();
    expect(
      stateRegistrationRioGrandeDoSul('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationRioGrandeDoSul('8740088322')).toBeTruthy();
    expect(stateRegistrationRioGrandeDoSul('9650052050')).toBeTruthy();
  });
});
