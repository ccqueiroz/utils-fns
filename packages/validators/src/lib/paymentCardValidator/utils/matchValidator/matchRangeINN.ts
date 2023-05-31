export const matchRangeINN = (cardNumber: string, min: number, max: number) => {
  const checkDigits = cardNumber.slice(0, min.toString().length);
  return Number(checkDigits) >= min && Number(checkDigits) <= max;
};
