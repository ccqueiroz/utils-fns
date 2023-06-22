/**
 * @param {string | number} expirationDate - If there is a due date in the free field, it must come first place and in YYYYMMDD format.
 * @returns string | null
 *
 */
export const convertDatePaymentSlipTaxCollection = (
  expirationDate?: string | number,
) => {
  if (!expirationDate) {
    return null;
  }
  const cleanExpirationDate = expirationDate.toString().replace(/\D/g, '');
  const formattedExpirationDate = `${cleanExpirationDate.slice(
    0,
    4,
  )}-${cleanExpirationDate.slice(4, 6)}-${cleanExpirationDate.slice(6, 8)}`;
  let parsedExpirationDate: Date | string = new Date(formattedExpirationDate);
  if (
    !(parsedExpirationDate instanceof Date) ||
    !isFinite(parsedExpirationDate.getTime())
  ) {
    return null;
  }
  parsedExpirationDate = parsedExpirationDate
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/');

  return parsedExpirationDate;
};
