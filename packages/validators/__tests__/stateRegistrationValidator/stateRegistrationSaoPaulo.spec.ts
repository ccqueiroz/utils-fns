import { stateRegistrationSaoPaulo } from '../../src/lib/stateRegistrationValidator/states/SP/index';
describe('[VALIDATORS: STATE_REGISTRATION_SAO_PAULO]', () => {
  it('Should return true when passed digits correctly to validate state registration into state São Paulo', () => {
    expect(stateRegistrationSaoPaulo('')).toBeFalsy();
    expect(stateRegistrationSaoPaulo('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationSaoPaulo('218355732')).toBeFalsy();
    expect(stateRegistrationSaoPaulo('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationSaoPaulo('110042490114')).toBeTruthy();
    expect(stateRegistrationSaoPaulo('110042490124')).toBeFalsy();
    expect(stateRegistrationSaoPaulo('110042490110')).toBeFalsy();
    expect(stateRegistrationSaoPaulo('043807661472')).toBeTruthy();
    expect(stateRegistrationSaoPaulo('P011004243002')).toBeTruthy();
    expect(stateRegistrationSaoPaulo('P011004245002')).toBeFalsy();
    expect(stateRegistrationSaoPaulo('730968844850')).toBeTruthy();
  });
});
