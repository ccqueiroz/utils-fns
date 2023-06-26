export const stateRegistrationRioGrandeDoNorte = (digits: string) => {
  const regexFormatStateRegistrationRioGrandeDoNorte = new RegExp(
    /^20[0-9]{7,8}$/,
  );
  if (!regexFormatStateRegistrationRioGrandeDoNorte.test(digits)) return false;

  const getInitialPositionCheckDigits = digits.length - 1;

  const checkDigits = digits
    .slice(getInitialPositionCheckDigits, digits.length)
    .split('');

  const baseDigits = digits
    .slice(0, getInitialPositionCheckDigits)
    .split('')
    .reverse();

  let multiplier = 2;
  const reducerByModule11 = baseDigits.reduce(
    (accumulator: string | number, currenValue: string | number) => {
      const result = Number(currenValue) * multiplier;
      multiplier = ++multiplier;
      return Number(accumulator) + result;
    },
    0,
  );
  let validationByModule11 = 11 - (reducerByModule11 % 11);

  if (validationByModule11 === 10 || validationByModule11 === 11)
    validationByModule11 = 0;

  if (
    validationByModule11 &&
    validationByModule11.toString() !== checkDigits[0]
  )
    return false;

  return true;
};
