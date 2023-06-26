import { stateRegistrationMatoGrossoDoSul } from '../../src/lib/stateRegistrationValidator/states/MS/index';
describe('[VALIDATORS: STATE_REGISTRATION_MATO_GROSSO_DO_SUL]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Mato Grosso do Sul', () => {
    expect(stateRegistrationMatoGrossoDoSul('')).toBeFalsy();
    expect(stateRegistrationMatoGrossoDoSul('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationMatoGrossoDoSul('218355732')).toBeFalsy();
    expect(
      stateRegistrationMatoGrossoDoSul('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationMatoGrossoDoSul('281916667')).toBeTruthy();
    expect(stateRegistrationMatoGrossoDoSul('286591510')).toBeTruthy();
  });
});
