/**
 *
 * @param value
 * @returns number | null
 *
 * @summary
 * is a simple checksum formula used to validate a variety of identification numbers
 * The check digit is calculated as follows:

 * If the number already contains the check digit, drop that digit to form the "payload". The check digit is usually the last digit.
 * With the payload, start with the rightmost digit. Moving left, double the value of every second digit (including the rightmost digit).
 * Add the resulting digit values together.
 *
 * References:
 * @link https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 */
export const luhnAlgorithm = (value: string | Array<string | number>) => {
  if (!value.length || (Array.isArray(value) && value.every((item) => !item)))
    return null;
  if (typeof value === 'string') value = value.split('');

  value = value
    .map((item) => item.toString().replace(/\D/g, ''))
    .filter(Boolean)
    .reverse();

  if (value.every((item) => !item)) return null;
  const result = value.reduce(callbackReducerLunhAlgorithm, 0);
  return +result;
};

const callbackReducerLunhAlgorithm = (
  accumulator: string | number,
  currentValue: string | number,
  currentIndex: number,
) => {
  if (currentIndex % 2 !== 0) {
    return Number(accumulator) + Number(currentValue);
  }
  const multiplyBy2 = Number(currentValue) * 2;
  const sum = multiplyBy2 > 9 ? (multiplyBy2 % 10) + 1 : multiplyBy2;
  return Number(accumulator) + sum;
};
