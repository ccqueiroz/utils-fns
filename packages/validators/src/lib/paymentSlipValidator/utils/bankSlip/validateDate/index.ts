/**
 * @param {string | null} dateElapsed - Number of days traveled since 1997-10-07. Amount extracted from the payment slip
 * @param {Date} dateReference - Date informed as argument for analysis
 * @returns boolean
 *
 */
export const validateDatePaymentoSlipToDate = (
  dateElapsed: string | null,
  dateReference: Date,
) => {
  if (!dateReference) return false;
  const dateAnalyze = new Date(dateReference)
    .toISOString()
    .replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, '')
    .split('-')
    .reverse()
    .join('/');

  return dateElapsed === dateAnalyze;
};
