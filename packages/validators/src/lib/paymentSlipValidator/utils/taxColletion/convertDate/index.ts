/**
 * @param {string | number} dateReference - If there is a due date in the free field, it must come first place and in YYYYMMDD format.
 * @param {Date} dateReference - Date informed as argument for analysis
 * @returns boolean
 *
 */
export const convertDatePaymentSlipTaxCollection = (
  expirationDate?: string | number,
  dateReference?: Date | string,
): boolean => {
  if (!expirationDate || !dateReference) {
    return false;
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
    return false;
  }
  parsedExpirationDate = parsedExpirationDate
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/');

  const formattedDateReference = dateReference.toString().replace(/\D/g, '');
  const parsedDateReference = formattedDateReference
    ? new Date(dateReference)
    : undefined;
  if (!parsedDateReference) {
    return false;
  }

  const formattedParsedDateReference = parsedDateReference
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/');

  return formattedParsedDateReference === parsedExpirationDate;
};
