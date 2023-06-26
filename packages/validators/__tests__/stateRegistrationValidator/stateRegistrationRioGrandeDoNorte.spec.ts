import { stateRegistrationRioGrandeDoNorte } from '../../src/lib/stateRegistrationValidator/states/RN/index';
describe('[VALIDATORS: STATE_REGISTRATION_RIO_GRANDE_DO_NORTE]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Rio Grande do Norte', () => {
    expect(stateRegistrationRioGrandeDoNorte('')).toBeFalsy();
    expect(stateRegistrationRioGrandeDoNorte('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationRioGrandeDoNorte('218355732')).toBeFalsy();
    expect(
      stateRegistrationRioGrandeDoNorte('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationRioGrandeDoNorte('2000400400')).toBeTruthy();
    expect(stateRegistrationRioGrandeDoNorte('209325240')).toBeTruthy();
  });
});
//20.040.040-1
