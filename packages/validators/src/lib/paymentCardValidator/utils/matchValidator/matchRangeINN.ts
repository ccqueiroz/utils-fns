/**
 *  @param {string} cardNumber
 *  @param {number} min - minimum number of patternINN range
 *  @param {number} max - maximum number of patternINN range
 *  @returns boolean
 */
export const matchRangeINN = (cardNumber: string, min: number, max: number) => {
  const checkDigits = cardNumber.slice(0, min.toString().length);
  return Number(checkDigits) >= min && Number(checkDigits) <= max;
};
