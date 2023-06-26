import { reducerCheckDigitControl } from '../reducerCheckDigitControl';

type LunhMod11Algorithm = {
  digits: string | Array<string | number>;
  reverseNumbers?: boolean;
};
/**
 * @param {Object} LunhMod11Algorithm
 * @property digits
 * @property reverseNumbers - When you need to reverse the numbers due to algorithm adaptations
 * @returns number | null
 *
 * @summary
   The DAC (Self-Conference Digit) modulo 11, from a number is calculated
    multiplying each digit by the sequence of multipliers 2,3,4,5,6,7,8,9,2,3,4....
    from right to left.

    The sum of the products of this multiplication is divided by 11, you get the remainder of the division,
    this remainder must be subtracted from 11, the product of the subtraction is the DAC.

    Reference:
    @see https://cmsarquivos.febraban.org.br/Arquivos/documentos/PDF/Layout%20-%20C%C3%B3digo%20de%20Barras%20-%20Vers%C3%A3o%207%20-%2001_03_2023_mn.pdf
 */
export const lunhMod11Algorithm = ({
  digits,
  reverseNumbers = true,
}: LunhMod11Algorithm) => {
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

  const result = reducerCheckDigitControl(digits.join(''));

  return 11 - (Number(result) % 11);
};
