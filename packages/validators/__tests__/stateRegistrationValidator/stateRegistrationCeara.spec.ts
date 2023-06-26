import { stateRegistrationCeara } from '../../src/lib/stateRegistrationValidator/states/CE/index';
describe('[VALIDATORS: STATE_REGISTRATION_CEARA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Ceara', () => {
    expect(stateRegistrationCeara('')).toBeFalsy();
    expect(stateRegistrationCeara('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationCeara('218355732')).toBeFalsy();
    expect(stateRegistrationCeara('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationCeara('298042207')).toBeTruthy();
    expect(stateRegistrationCeara('859174700')).toBeTruthy();
  });
});
