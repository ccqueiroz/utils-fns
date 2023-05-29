import { normalizeToValidation } from '@utils-fns/validators/helpers/normalizeToValidation';

export const cnpjValidator = (cnpj?: string): boolean => {
  const VALID_LENGTH = 14;
  cnpj = normalizeToValidation({ value: cnpj, length: VALID_LENGTH });
  if (!cnpj) return false;
  let sum = 0;
  let factor = 5;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i), 10) * factor;
    factor = factor === 2 ? 9 : factor - 1;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(cnpj.charAt(12), 10)) {
    return false;
  }

  sum = 0;
  factor = 6;

  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i), 10) * factor;
    factor = factor === 2 ? 9 : factor - 1;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(cnpj.charAt(13), 10)) return false;

  return true;
};
