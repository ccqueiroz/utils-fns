import { utils } from '@utils-fns/utils';
export const lunhMod10Algorithm = (cardNumber: string) => {
  const checkDigit = cardNumber.charAt(cardNumber.length - 1);
  const result = utils.luhnAlgorithm(
    cardNumber.slice(0, cardNumber.length - 1),
  );
  if (!result) return false;
  let validateCheckDigit = 10 - (result % 10);
  validateCheckDigit = validateCheckDigit === 10 ? 0 : validateCheckDigit;
  if (checkDigit !== validateCheckDigit.toString()) return false;
  const validateMod10 = utils.luhnAlgorithm(cardNumber);
  return validateMod10 && validateMod10 % 10 === 0;
};
