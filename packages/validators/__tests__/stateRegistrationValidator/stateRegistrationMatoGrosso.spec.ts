import { stateRegistrationMatoGrosso } from '../../src/lib/stateRegistrationValidator/states/MT/index';
describe('[VALIDATORS: STATE_REGISTRATION_MATO_GROSSO]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Mato Grosso', () => {
    expect(stateRegistrationMatoGrosso('')).toBeFalsy();
    expect(stateRegistrationMatoGrosso('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationMatoGrosso('218355732')).toBeFalsy();
    expect(
      stateRegistrationMatoGrosso('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationMatoGrosso('46215387706')).toBeTruthy();
    expect(stateRegistrationMatoGrosso('84541643500')).toBeTruthy();
  });
});
