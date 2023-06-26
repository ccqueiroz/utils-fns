import { validationWithOneCheckDigitAndMod11 } from '../../validationWithOneCheckDigitAndMod11';
export const stateRegistrationRondonia = (digits: string) => {
  const regexFormatStateRegistrationRondonia = new RegExp(/^[0-9]{9,14}$/);

  if (!regexFormatStateRegistrationRondonia.test(digits)) return false;

  const baseDigits =
    digits.length === 9 ? digits.slice(3, digits.length) : digits;

  return validationWithOneCheckDigitAndMod11({
    digits: baseDigits,
    regexFormat: new RegExp(/./),
  });
};
