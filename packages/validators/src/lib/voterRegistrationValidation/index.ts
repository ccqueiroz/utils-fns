import { utils } from '@utils-fns/utils';
import { normalizeToValidation } from '../../helpers/normalizeToValidation';

export const voterRegistrationValidation = (digits?: string) => {
  const VALID_LENGTH = 12;
  digits = normalizeToValidation({ value: digits, length: VALID_LENGTH });
  if (!digits) return false;
  const digitsUF = digits.slice(8, 10);

  const checkDigits = digits.slice(10, digits.length).split('');

  let validationFirstCheckDigit = utils.lunhMod11Algorithm({
    digits: digits.slice(0, digits.length - 4),
  });

  if (validationFirstCheckDigit === null) return false;

  if (validationFirstCheckDigit === 10 || validationFirstCheckDigit === 11) {
    if (digitsUF.match(/^(01|02)/)) {
      validationFirstCheckDigit = 1;
    } else {
      validationFirstCheckDigit = 0;
    }
  }

  if (validationFirstCheckDigit.toString() !== checkDigits[0]) return false;
  let validationSecontCheckDigit = utils.lunhMod11Algorithm({
    digits: digits.slice(8, 11),
  });

  if (validationSecontCheckDigit === null) return false;

  if (validationSecontCheckDigit === 10 || validationSecontCheckDigit === 11) {
    if (digitsUF.match(/^(01|02)/)) {
      validationSecontCheckDigit = 1;
    } else {
      validationSecontCheckDigit = 0;
    }
  }

  if (validationSecontCheckDigit.toString() !== checkDigits[1]) return false;

  return true;
};
