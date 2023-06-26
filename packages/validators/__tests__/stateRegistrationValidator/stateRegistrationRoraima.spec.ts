import { stateRegistrationRoraima } from '../../src/lib/stateRegistrationValidator/states/RR/index';
describe('[VALIDATORS: STATE_REGISTRATION_RORAIMA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Roraima', () => {
    expect(stateRegistrationRoraima('')).toBeFalsy();
    expect(stateRegistrationRoraima('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationRoraima('218355732')).toBeFalsy();
    expect(stateRegistrationRoraima('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationRoraima('240061536')).toBeTruthy();
    expect(stateRegistrationRoraima('249825910')).toBeTruthy();
  });
});
