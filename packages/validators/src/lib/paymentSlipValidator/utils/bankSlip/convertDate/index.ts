/**
 * @param {string | number} dateElapsed - Number of days traveled since 1997-10-07. Amount extracted from the payment slip
 * @param {Date} dateReference - Date informed as argument for analysis
 * @returns boolean
 *
 */
export const convertDatePaymentoSlipToDate = (
  dateElapsed: string | number,
  dateReference: Date,
) => {
  if (
    !dateElapsed ||
    (typeof dateElapsed === 'number' && dateElapsed < 0) ||
    (typeof dateElapsed === 'string' && !dateElapsed.replace(/\D/g, '')) ||
    !dateReference
  )
    return false;

  const _BASE_DATE = new Date('1997-10-07').getTime();
  const baseTime = 1000 * 60 * 60 * 24; //1 day
  const dateAnalyzeMilessecound = Math.floor(
    Number(dateElapsed) * baseTime + _BASE_DATE,
  );
  const dateReferenceTransf = new Date(dateReference)
    .toISOString()
    .replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, '')
    .split('-')
    .reverse()
    .join('/');
  const dateAnalyze = new Date(dateAnalyzeMilessecound)
    .toISOString()
    .replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, '')
    .split('-')
    .reverse()
    .join('/');

  return dateReferenceTransf === dateAnalyze;
};
