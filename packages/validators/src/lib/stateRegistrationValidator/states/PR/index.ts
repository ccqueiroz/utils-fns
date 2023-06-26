import { mod11AlgorithmAdapter } from './mod11AlgorithmAdapter';

export const stateRegistrationParana = (digits: string) => {
  const regexFormatStateRegistrationParana = new RegExp(/^[0-9]{10}$/);

  if (!regexFormatStateRegistrationParana.test(digits)) return false;

  const getInitialPositionCheckDigits = digits.length - 2;

  const checkDigits = digits
    .slice(getInitialPositionCheckDigits, digits.length)
    .split('');

  const baseDigits = digits
    .slice(0, getInitialPositionCheckDigits)
    .split('')
    .reverse();

  let validationByModule11AdapterForFirstDigit = mod11AlgorithmAdapter({
    digits: baseDigits,
  });

  if (
    validationByModule11AdapterForFirstDigit === 10 ||
    validationByModule11AdapterForFirstDigit === 11
  )
    validationByModule11AdapterForFirstDigit = 0;

  if (
    validationByModule11AdapterForFirstDigit &&
    validationByModule11AdapterForFirstDigit.toString() !== checkDigits[0]
  )
    return false;

  baseDigits.unshift(checkDigits[0]);
  let validationByModule11ForSecondDigit = mod11AlgorithmAdapter({
    digits: baseDigits,
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
