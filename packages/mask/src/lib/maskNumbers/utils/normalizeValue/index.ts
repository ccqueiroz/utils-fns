import { NormalizeNumberValueType } from '../../../contracts';
import { escapeRegExp } from '../../../generalMask/utils';
import { countOcurrences } from '../countOcurrences';
import { validationForNormalizationToBeNull } from '../validationForNormalizationToBeNull';

export const normalizeValue = ({
  value,
  previousValue,
  prefix,
  suffix,
  decimalPlaces,
  allowNegative,
}: NormalizeNumberValueType) => {
  const escapedPrefix = escapeRegExp(prefix ?? '');
  const escapedSuffix = escapeRegExp(suffix ?? '');
  const prefixRegex = new RegExp(`^[-|+]? ?${escapedPrefix}`);
  const suffixRegex = new RegExp(`${escapedSuffix}$`);
  if (!value) return '';
  let negativeMultiplier = 1;
  if (allowNegative) {
    const minusRegex = /-/g;
    const power =
      countOcurrences(value.toString(), minusRegex) -
      countOcurrences(prefix ?? '', minusRegex) -
      countOcurrences(suffix ?? '', minusRegex);
    negativeMultiplier = (-1) ** power % 2;
  }
  let digits = value.toString();
  if (prefix) digits = digits.replace(prefixRegex, '');
  if (suffix) digits = digits.replace(suffixRegex, '');
  digits = digits.replace(/\D/g, '');

  if (
    validationForNormalizationToBeNull({
      digits,
      value,
      previousValue,
    })
  )
    return null;

  const number =
    (Number(digits) / Math.pow(10, decimalPlaces)) * negativeMultiplier;

  return number;
};
