import { convertAmount } from '../convertAmount';

/**
 * @param {string | number | null} amount - amount extracted from the payment slip
 * @param {string | number | Array<string | number> | undefined} amountReference - value entered as an argument for validation
 * @returns boolean
 */
export const validAmount = (
  amount: string | number | null,
  amountReference: string | number | Array<string | number>,
): boolean => {
  const normalizeAmountReference = convertAmount(amountReference);
  return Boolean(
    amount && normalizeAmountReference && amount === normalizeAmountReference,
  );
};
