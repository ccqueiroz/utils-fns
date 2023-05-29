import { normalizeToValidation } from '@utils-fns/validators/helpers/normalizeToValidation';

export const cpfValidator = (cpf?: string): boolean => {
  const VALID_LENGTH = 11;

  cpf = normalizeToValidation({ value: cpf, length: VALID_LENGTH });
  if (!cpf) return false;
  let sum = 0;

  for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1], 10) * (11 - i);

  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;

  if (remainder !== parseInt(cpf.substring(9, 10), 10)) return false;
  sum = 0;

  for (let j = 1; j <= 10; j++) sum += parseInt(cpf[j - 1], 10) * (12 - j);

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf[10], 10)) return false;

  return true;
};
