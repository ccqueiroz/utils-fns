import { utils } from '@utils-fns/utils';
export const stateRegistrationPernambuco = (digits: string) => {
  const regexFormatStateRegistrationPernambuco = new RegExp(/^[0-9]{9}$/);

  if (!regexFormatStateRegistrationPernambuco.test(digits)) return false;

  const checkDigits = digits.slice(7, digits.length).split('');

  let validationByModule11ForFirstDigit = utils.lunhMod11Algorithm({
    digits: digits.slice(0, digits.length - 2),
  });

  if (
    validationByModule11ForFirstDigit === 10 ||
    validationByModule11ForFirstDigit === 11
  )
    validationByModule11ForFirstDigit = 0;

  if (
    validationByModule11ForFirstDigit &&
    validationByModule11ForFirstDigit.toString() !== checkDigits[0]
  )
    return false;

  let validationByModule11ForSecondDigit = utils.lunhMod11Algorithm({
    digits: digits.slice(0, digits.length - 1),
  });

  if (
    validationByModule11ForSecondDigit === 10 ||
    validationByModule11ForSecondDigit === 11
  )
    validationByModule11ForSecondDigit = 0;

  if (
    validationByModule11ForSecondDigit &&
    validationByModule11ForSecondDigit.toString() !== checkDigits[1]
  )
    return false;

  return true;
};
