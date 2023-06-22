/**
 * @param {string | number} dateElapsed - Number of days traveled since 1997-10-07. Amount extracted from the payment slip
 * @returns string | null
 */
export const convertDatePaymentoSlip = (dateElapsed: string | number) => {
  if (
    !dateElapsed ||
    (typeof dateElapsed === 'number' && dateElapsed < 0) ||
    (typeof dateElapsed === 'string' && !dateElapsed.replace(/\D/g, ''))
  )
    return null;

  const _BASE_DATE = new Date('1997-10-07').getTime();
  const baseTime = 1000 * 60 * 60 * 24; //1 day
  const dateAnalyzeMilessecound = Math.floor(
    Number(dateElapsed) * baseTime + _BASE_DATE,
  );

  let dateAnalyze: Date | string = new Date(dateAnalyzeMilessecound);

  if (!(dateAnalyze instanceof Date) || !isFinite(dateAnalyze.getTime())) {
    return null;
  }

  dateAnalyze = dateAnalyze
    .toISOString()
    .replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, '')
    .split('-')
    .reverse()
    .join('/');

  return dateAnalyze;
};
