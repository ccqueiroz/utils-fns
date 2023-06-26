import { validationWithOneCheckDigitAndMod11 } from '../../validationWithOneCheckDigitAndMod11';
export const stateRegistrationRioDeJaneiro = (digits: string) => {
  return validationWithOneCheckDigitAndMod11({
    digits,
    regexFormat: new RegExp(/^[0-9]{8}$/),
  });
};
