import { validationWithOneCheckDigitAndMod11 } from '../../validationWithOneCheckDigitAndMod11';
export const stateRegistrationSergipe = (digits: string) => {
  return validationWithOneCheckDigitAndMod11({
    digits,
    regexFormat: new RegExp(/^[0-9]{9}$/),
  });
};
