import { luhnAlgorithm } from '../lunhAlgorithm';

type LunhMod10Algorithm = {
  digits: string;
  onlyValidCheckDigit?: boolean;
  reverseNumbers?: boolean;
};
/**
 * @param {Object} LunhMod10Algorithm
 * @property digits
 * @property reverseNumbers - When you need to reverse the numbers due to algorithm adaptations
 * @property onlyValidCheckDigit - It just checks the check digit with the result of the Lunh algorithm
 * @returns number | null
 *
 */
export const lunhMod10Algorithm = ({
  digits,
  onlyValidCheckDigit = false,
  reverseNumbers = false,
}: LunhMod10Algorithm) => {
  const originalValue = digits;
  const checkDigit = digits.charAt(digits.length - 1);
  digits = digits.substring(0, digits.length - 1);

  if (reverseNumbers) digits = digits.split('').reverse().join('');

  const result = luhnAlgorithm(digits);
  if (!result) return false;

  let validateCheckDigit = 10 - (result % 10);

  if (onlyValidCheckDigit) return validateCheckDigit.toString() === checkDigit;
  validateCheckDigit = validateCheckDigit === 10 ? 0 : validateCheckDigit;

  if (checkDigit !== validateCheckDigit.toString()) return false;
  const validateMod10 = luhnAlgorithm(
    reverseNumbers ? originalValue.split('').reverse().join('') : originalValue,
  );

  return validateMod10 && validateMod10 % 10 === 0;
};
