import { GeneralValidationStateRegistration } from '..';
import { mod11AlgorithmAdapter } from '../mod11AlgorithmAdapter';

export const generalValidationStateRegistration = ({
  digits,
  checkDigits,
}: GeneralValidationStateRegistration) => {
  let validationByModule11AdapterForFirstDigit = mod11AlgorithmAdapter({
    digits: digits.slice(0, 8).split(''),
    validationRuralStateRegistration: false,
  });

  if (
    validationByModule11AdapterForFirstDigit === 10 ||
    validationByModule11AdapterForFirstDigit === 11
  )
    validationByModule11AdapterForFirstDigit = 0;

  if (validationByModule11AdapterForFirstDigit.toString() !== checkDigits[0])
    return false;

  let validationByModule11AdapterForSecondDigit = mod11AlgorithmAdapter({
    digits: digits
      .slice(0, digits.length - 1)
      .split('')
      .reverse(),
    validationRuralStateRegistration: true,
  });

  if (
    validationByModule11AdapterForSecondDigit === 10 ||
    validationByModule11AdapterForSecondDigit === 11
  )
    validationByModule11AdapterForSecondDigit = 0;

  if (validationByModule11AdapterForSecondDigit.toString() !== checkDigits[1])
    return false;

  return true;
};
