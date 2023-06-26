import { stateRegistrationMaranhao } from '../../src/lib/stateRegistrationValidator/states/MA/index';
describe('[VALIDATORS: STATE_REGISTRATION_MARANHAO]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Maranhão', () => {
    expect(stateRegistrationMaranhao('')).toBeFalsy();
    expect(stateRegistrationMaranhao('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationMaranhao('218355732')).toBeFalsy();
    expect(stateRegistrationMaranhao('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationMaranhao('128488883')).toBeTruthy();
    expect(stateRegistrationMaranhao('122036050')).toBeTruthy();
  });
});
