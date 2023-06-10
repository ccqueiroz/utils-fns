import { utils } from '@utils-fns/utils';
import { mod11AlgorithmAdapter } from '../../mod11AlgorithAdapter';

export const moduleToBeUsedForValidation = (
  verifyingDigit: string,
  digits?: string,
  referenceValue?: string,
) => {
  if (!digits || !referenceValue) return false;

  const regexToModule10 = new RegExp(/6|7/);
  const regexToModule11 = new RegExp(/8|9/);
  if (regexToModule10.test(referenceValue)) {
    /*The verifying digit is added to the block of digits for Mod10 validation,
      where the lunhMod10Algorithm method removes the last digit and calculates
      the block by the lunh algorithm and after that checks the verifying digit.
     */
    return Boolean(
      utils.lunhMod10Algorithm({
        digits: digits + verifyingDigit,
        onlyValidCheckDigit: true,
      }),
    );
  } else if (regexToModule11.test(referenceValue)) {
    return mod11AlgorithmAdapter(digits, verifyingDigit);
  } else {
    return false;
  }
};
