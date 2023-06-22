/**
 * @param {string | null} dateReference - If there is a due date in the free field, it must come first place and in YYYYMMDD format.
 * @param {Date} dateReference - Date informed as argument for analysis
 * @returns boolean
 *
 */
export const validateDatePaymentSlipTaxCollection = (
  expirationDate?: string | null,
  dateReference?: Date | string,
): boolean => {
  if (!expirationDate || !dateReference) {
    return false;
  }
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

  return formattedParsedDateReference === expirationDate;
};
