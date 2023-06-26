import { utils } from '@utils-fns/utils';
export const stateRegistrationDistritoFederal = (digits: string) => {
  const regexFormatStateRegistrationDistritoFederal = new RegExp(
    /^07[0-9]{6}00(1|2|3)[0-9]{2}$/,
  );

  if (!regexFormatStateRegistrationDistritoFederal.test(digits)) return false;

  const checkDigits = digits.slice(11, digits.length).split('');

  const baseDigits = digits.slice(0, digits.length - 2);

  const validationByMod11ForFirstDigits = utils.lunhMod11Algorithm({
    digits: baseDigits,
    reverseNumbers: true,
  });

  if (validationByMod11ForFirstDigits === null) return false;

  let firstCheckDigit;

  if (
    validationByMod11ForFirstDigits === 10 ||
    validationByMod11ForFirstDigits === 11
  )
    firstCheckDigit = '0';
  else firstCheckDigit = validationByMod11ForFirstDigits.toString();

  if (firstCheckDigit !== checkDigits[0]) return false;

  const validationByMod11ForSecondDigits = utils.lunhMod11Algorithm({
    digits: baseDigits + firstCheckDigit,
    reverseNumbers: true,
  });

  if (validationByMod11ForSecondDigits === null) return false;

  let secondCheckDigit;
  if (
    validationByMod11ForSecondDigits === 10 ||
    validationByMod11ForFirstDigits === 11
  )
    secondCheckDigit = '0';
  else secondCheckDigit = validationByMod11ForSecondDigits.toString();

  if (secondCheckDigit !== checkDigits[1]) return false;

  return true;
};
