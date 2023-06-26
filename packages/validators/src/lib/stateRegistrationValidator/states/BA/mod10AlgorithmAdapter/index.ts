import { utils } from '@utils-fns/utils';

type Mod10AlgorithmAdapter = {
  digits: string | Array<string | number>;
  reverseNumbers?: boolean;
};

export const mod10AlgorithmAdapter = ({
  digits,
  reverseNumbers,
}: Mod10AlgorithmAdapter) => {
  if (
    !digits.length ||
    (Array.isArray(digits) && digits.every((item) => !item))
  )
    return null;

  if (typeof digits === 'string') digits = digits.split('');

  digits = digits
    .map((item) => item.toString().replace(/\D/g, ''))
    .filter(Boolean);
  if (reverseNumbers) digits = digits.reverse();
  if (digits.every((item) => !item)) return null;

  const result = utils.reducerCheckDigitControl(digits.join(''));
  const restMod10 = result % 10;
  if (restMod10 === 0 || restMod10 === 10) return 0;
  else return 10 - restMod10;
};
