import { stateRegistrationSantaCatarina } from '../../src/lib/stateRegistrationValidator/states/SC/index';
describe('[VALIDATORS: STATE_REGISTRATION_SANTA_CATARINA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Santa Catarina', () => {
    expect(stateRegistrationSantaCatarina('')).toBeFalsy();
    expect(stateRegistrationSantaCatarina('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationSantaCatarina('218355732')).toBeFalsy();
    expect(
      stateRegistrationSantaCatarina('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationSantaCatarina('729398781')).toBeTruthy();
    expect(stateRegistrationSantaCatarina('251040852')).toBeTruthy();
  });
});
