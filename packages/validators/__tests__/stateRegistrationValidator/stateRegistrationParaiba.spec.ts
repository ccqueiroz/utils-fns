import { stateRegistrationParaiba } from '../../src/lib/stateRegistrationValidator/states/PB/index';
describe('[VALIDATORS: STATE_REGISTRATION_PARAIBA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Paraíba', () => {
    expect(stateRegistrationParaiba('')).toBeFalsy();
    expect(stateRegistrationParaiba('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationParaiba('218355732')).toBeFalsy();
    expect(stateRegistrationParaiba('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationParaiba('746943024')).toBeTruthy();
    expect(stateRegistrationParaiba('217908284')).toBeTruthy();
  });
});
