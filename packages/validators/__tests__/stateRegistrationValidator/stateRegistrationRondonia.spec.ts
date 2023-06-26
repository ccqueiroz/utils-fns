import { stateRegistrationRondonia } from '../../src/lib/stateRegistrationValidator/states/RO/index';
describe('[VALIDATORS: STATE_REGISTRATION_RONDONIA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Rondônia', () => {
    expect(stateRegistrationRondonia('')).toBeFalsy();
    expect(stateRegistrationRondonia('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationRondonia('218355732')).toBeFalsy();
    expect(stateRegistrationRondonia('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationRondonia('78302590040091')).toBeTruthy();
    expect(stateRegistrationRondonia('00000000625213')).toBeTruthy();
    expect(stateRegistrationRondonia('101625213')).toBeTruthy();
  });
});
