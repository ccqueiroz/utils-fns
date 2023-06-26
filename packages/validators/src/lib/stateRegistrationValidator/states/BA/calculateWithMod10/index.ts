import { mod10AlgorithmAdapter } from '../mod10AlgorithmAdapter';

export const calculateWithMod10 = (digits: string) => {
  const getInitialPositionCheckDigits = digits.length - 2;
  const checkDigits = digits
    .slice(getInitialPositionCheckDigits, digits.length)
    .split('');

  const baseDigits = digits.slice(0, getInitialPositionCheckDigits);

  const validationByMod10ForSecondDigits = mod10AlgorithmAdapter({
    digits: baseDigits,
    reverseNumbers: true,
  });
  if (validationByMod10ForSecondDigits === null) return false;
  const secondCheckDigit = validationByMod10ForSecondDigits.toString();

  if (secondCheckDigit !== checkDigits[1]) return false;

  const validationByMod10ForFirstDigits = mod10AlgorithmAdapter({
    digits: baseDigits + secondCheckDigit,
    reverseNumbers: true,
  });

  if (validationByMod10ForFirstDigits === null) return false;
  const firstCheckDigit = validationByMod10ForFirstDigits.toString();

  if (firstCheckDigit !== checkDigits[0]) return false;

  return true;
};
