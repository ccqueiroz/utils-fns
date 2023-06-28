import { normalizeToValidation } from '../../helpers/normalizeToValidation';

export const renavamValidator = (renavam?: string) => {
  const VALID_LENGTH = 11;

  renavam = normalizeToValidation({ value: renavam, length: VALID_LENGTH });
  if (!renavam) return false;
  const checkDigits = renavam.slice(10, renavam.length);
  const baseDigits = renavam.slice(0, 10);

  let multiplier = 2;
  const reducerByModule11 = baseDigits
    .split('')
    .reverse()
    .reduce((accumulator: string | number, currenValue: string | number) => {
      const result = Number(currenValue) * multiplier;
      multiplier = multiplier === 9 ? 2 : ++multiplier;
      return Number(accumulator) + result;
    }, 0);

  let firstCheckDigit = 11 - (reducerByModule11 % 11);
  if (firstCheckDigit === 10 || firstCheckDigit === 11) firstCheckDigit = 0;

  if (firstCheckDigit.toString() !== checkDigits[0]) return false;

  return true;
};
