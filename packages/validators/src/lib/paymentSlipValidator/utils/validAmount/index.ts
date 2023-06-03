/* eslint-disable prettier/prettier */
/**
 * @param {string | number | Array<string | number>} amount - amount extracted from the payment slip
 * @param {string | number | Array<string | number> | undefined} amountReference - value entered as an argument for validation
 * @returns boolean
 */
export const validAmount = (
  amount: string | number | Array<string | number>,
  amountReference: string | number | Array<string | number>,
): boolean | null => {
  if (typeof amount === 'string') {
    amount = amount.replace(/\D/g, '').split('');
    amount.splice(amount.length - 2, 0, '.');
    amount = amount.join('');
  }
  if (typeof amountReference === 'string') {
    amountReference = amountReference.replace(/\D/g, '').split('');
    amountReference.splice(amountReference.length - 2, 0, '.');
    amountReference = amountReference.join('');
  }

  const normalizeAmount = amount
    ? new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(amount))
    : null;

  const normalizeAmountReference = amountReference
    ? new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(amountReference))
    : null;

    return Boolean(normalizeAmount && normalizeAmountReference && normalizeAmount === normalizeAmountReference);
};
