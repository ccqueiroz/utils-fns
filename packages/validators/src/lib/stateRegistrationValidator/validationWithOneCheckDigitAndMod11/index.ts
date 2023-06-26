import { utils } from '@utils-fns/utils';

type ValidationWithOneCheckDigitAndMod11 = {
  digits: string;
  regexFormat: RegExp;
};
export const validationWithOneCheckDigitAndMod11 = ({
  digits,
  regexFormat,
}: ValidationWithOneCheckDigitAndMod11) => {
  if (!regexFormat.test(digits)) return false;

  const getInitialPositionCheckDigits = digits.length - 1;

  const checkDigits = digits
    .slice(getInitialPositionCheckDigits, digits.length)
    .split('');

  const baseDigits = digits.slice(0, getInitialPositionCheckDigits);

  let validationByModule11 = utils.lunhMod11Algorithm({
    digits: baseDigits,
    reverseNumbers: true,
  });

  if (validationByModule11 === 10 || validationByModule11 === 11)
    validationByModule11 = 0;

  if (
    validationByModule11 &&
    validationByModule11.toString() !== checkDigits[0]
  )
    return false;

  return true;
};
