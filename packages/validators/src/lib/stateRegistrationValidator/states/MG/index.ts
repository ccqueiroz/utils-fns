import { utils } from '@utils-fns/utils';
import { findNextTen } from './findNextTen';
import { mod11AlgorithmAdapter } from './mod11AlgorithmAdapter';
export const stateRegistrationMinasGerais = (digits: string) => {
  const regexFormatStateRegistrationMinasGerais = new RegExp(/^[0-9]{13}$/);

  if (!regexFormatStateRegistrationMinasGerais.test(digits)) return false;

  const checkDigits = digits.slice(11, digits.length).split('');

  const digitsForCalcFirstCheckDigit = digits
    .slice(0, digits.length - 2)
    .split('');

  digitsForCalcFirstCheckDigit.splice(3, 0, '0');

  const reduceLunhAlgorithm = utils.luhnAlgorithm(digitsForCalcFirstCheckDigit);

  if (reduceLunhAlgorithm === null) return false;

  const firstCheckDigit =
    findNextTen(reduceLunhAlgorithm) - reduceLunhAlgorithm;

  if (firstCheckDigit.toString() !== checkDigits[0]) return false;

  const digitsForCalcSecondCheckDigit = digits
    .slice(0, digits.length - 1)
    .split('')
    .reverse();

  let validationByModule11 = mod11AlgorithmAdapter({
    digits: digitsForCalcSecondCheckDigit,
  });

  if (validationByModule11 === 10 || validationByModule11 === 11)
    validationByModule11 = 0;

  if (
    validationByModule11 &&
    validationByModule11.toString() !== checkDigits[1]
  )
    return false;

  return true;
};
