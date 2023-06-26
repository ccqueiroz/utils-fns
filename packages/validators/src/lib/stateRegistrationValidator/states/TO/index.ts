import { validationWithOneCheckDigitAndMod11 } from '../../validationWithOneCheckDigitAndMod11';
export const stateRegistrationTocantins = (digits: string) => {
  const regexFormatStateRegistrationTocantins = new RegExp(
    /^[0-9]{2}(01|02|03|99)[0-9]{7}$/,
  );

  if (!regexFormatStateRegistrationTocantins.test(digits)) return false;

  const baseDigits = digits.slice(0, 2) + digits.slice(4, digits.length);

  return validationWithOneCheckDigitAndMod11({
    digits: baseDigits,
    regexFormat: new RegExp(/./),
  });
};
