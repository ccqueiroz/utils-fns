import { normalizeToValidation } from '../../helpers/normalizeToValidation/index';

export const nisValidator = (nis?: string): boolean => {
  const VALID_LENGTH = 11;
  nis = normalizeToValidation({ value: nis, length: VALID_LENGTH });
  if (!nis) return false;

  const multiplierBase = 3298765432;

  let total = 0;

  for (let i = 0; i < 10; i++) {
    const multiplying = Number(nis[i]);
    const multiplier = Number(String(multiplierBase).charAt(i));
    total += multiplying * multiplier;
  }
  let remainder = 11 - (total % 11);
  remainder = remainder === 10 || remainder === 11 ? 0 : remainder;
  const digit = Number(nis.charAt(10));
  return remainder === digit;
};
