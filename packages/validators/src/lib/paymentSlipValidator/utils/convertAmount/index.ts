export const convertAmount = (
  amount: string | number | Array<string | number>,
) => {
  if (typeof amount === 'string') {
    amount = amount.replace(/\D/g, '').split('');
    amount.splice(amount.length - 2, 0, '.');
    amount = amount.join('');
  }
  return amount
    ? new Intl.NumberFormat('en', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(amount))
    : null;
};
