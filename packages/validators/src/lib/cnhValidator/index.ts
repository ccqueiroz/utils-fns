import { normalizeToValidation } from '../../helpers/normalizeToValidation';

export const cnhValidator = (cnh?: string) => {
  const VALID_LENGTH = 11;
  cnh = normalizeToValidation({ value: cnh, length: VALID_LENGTH });
  if (!cnh) return false;
  const checkDigits = cnh.slice(9, cnh.length);
  const baseDigits = cnh.slice(0, 9);

  let multiplier = 2;
  let reducerByModule11 = baseDigits
    .split('')
    .reduce((accumulator: string | number, currenValue: string | number) => {
      const result = Number(currenValue) * multiplier;
      multiplier = multiplier === 10 ? 2 : ++multiplier;
      return Number(accumulator) + result;
    }, 0);

  let firstCheckDigit = 11 - (reducerByModule11 % 11);
  if (firstCheckDigit === 10 || firstCheckDigit === 11) firstCheckDigit = 0;

  if (firstCheckDigit.toString() !== checkDigits[0]) return false;

  multiplier = 3;
  reducerByModule11 = (baseDigits + checkDigits[0])
    .split('')
    .reduce((accumulator: string | number, currenValue: string | number) => {
      const result = Number(currenValue) * multiplier;
      multiplier = multiplier === 11 ? 2 : ++multiplier;
      return Number(accumulator) + result;
    }, 0);

  let secondCheckDigit = 11 - (reducerByModule11 % 11);
  if (secondCheckDigit === 10 || secondCheckDigit === 11) secondCheckDigit = 0;

  if (secondCheckDigit.toString() !== checkDigits[1]) return false;

  return true;
};
