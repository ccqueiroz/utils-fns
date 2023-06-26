/**
 * This function is to be applied in cases where you need to use a reducer with increment of weights 2 to 9,
 * this process, abstracted from within the algorithm of module 11.
 * @param digits
 * @returns result
 */
export const reducerCheckDigitControl = (digits: string): number => {
  let multiplier = 2;
  const result = digits
    .split('')
    .reduce((accumulator: string | number, currenValue: string | number) => {
      const result = Number(currenValue) * multiplier;
      multiplier = multiplier === 9 ? 2 : ++multiplier;
      return Number(accumulator) + result;
    }, 0);

  return result;
};
