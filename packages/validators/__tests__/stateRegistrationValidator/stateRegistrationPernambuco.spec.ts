import { stateRegistrationPernambuco } from '../../src/lib/stateRegistrationValidator/states/PE/index';
describe('[VALIDATORS: STATE_REGISTRATION_PERNAMBUCO]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Pernambuco', () => {
    expect(stateRegistrationPernambuco('')).toBeFalsy();
    expect(stateRegistrationPernambuco('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationPernambuco('218355732')).toBeFalsy();
    expect(
      stateRegistrationPernambuco('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationPernambuco('032141840')).toBeTruthy();
    expect(stateRegistrationPernambuco('934205019')).toBeTruthy();
  });
});
