import { stateRegistrationValidator } from './../../src/lib/stateRegistrationValidator/index';
import { TypesUtils } from '@utils-fns/utils';

describe('[VALIDATORS: STATE_REGISTRATION_VALIDATOR]', () => {
  it('should return false when the entered digits or uf are not of the correct type.', () => {
    expect(
      stateRegistrationValidator({
        digits: '',
        uf: 'PB',
      }),
    ).toBeFalsy();
    expect(
      stateRegistrationValidator({
        digits: 'as1212174694302sasasaswdfegr4',
        uf: 'SP',
      }),
    ).toBeFalsy();

    expect(
      stateRegistrationValidator({
        digits: '746943024',
        uf: 'WW' as TypesUtils['StateAbbreviations'],
      }),
    ).toBeFalsy();
  });
  it('Should validate the entered digits based on the informed uf', () => {
    expect(
      stateRegistrationValidator({
        digits: '746943024',
        uf: 'PB',
      }),
    ).toBeTruthy();
    expect(
      stateRegistrationValidator({
        digits: '746943024',
        uf: 'SP',
      }),
    ).toBeFalsy();

    expect(
      stateRegistrationValidator({
        digits: '249825910',
        uf: 'RR',
      }),
    ).toBeTruthy();

    expect(
      stateRegistrationValidator({
        digits: 'P011004243002',
        uf: 'SP',
      }),
    ).toBeTruthy();
  });
});
