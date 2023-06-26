import { validationWithOneCheckDigitAndMod11 } from '../../validationWithOneCheckDigitAndMod11';
export const stateRegistrationMatoGrosso = (digits: string) => {
  return validationWithOneCheckDigitAndMod11({
    digits,
    regexFormat: new RegExp(/^[0-9]{11}$/),
  });
};
