import { stateRegistrationMinasGerais } from '../../src/lib/stateRegistrationValidator/states/MG/index';
describe('[VALIDATORS: STATE_REGISTRATION_MINAS_GERAIS]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Minas Gerais', () => {
    expect(stateRegistrationMinasGerais('')).toBeFalsy();
    expect(stateRegistrationMinasGerais('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationMinasGerais('218355732')).toBeFalsy();
    expect(
      stateRegistrationMinasGerais('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationMinasGerais('1970008193119')).toBeTruthy();
    expect(stateRegistrationMinasGerais('1970008193110')).toBeFalsy();
    expect(stateRegistrationMinasGerais('1970008193199')).toBeFalsy();
    expect(stateRegistrationMinasGerais('0623079040081')).toBeTruthy();
  });
});
