import {
  FormatNumberValueType,
  ResponseMaskInterface,
} from '../../../contracts';

export const formatValue = ({
  value,
  decimalPlaces,
  allowNegative,
  prefix,
  suffix,
  numberWithoutPonctuation,
  locale,
}: FormatNumberValueType): ResponseMaskInterface => {
  let number = value;
  let sign = '';
  if (number === undefined || number === '' || number === null)
    return {
      value: '',
      unmask: '',
    };
  else if (typeof number !== 'number') number = Number(number);
  if (number < 0) {
    number *= -1;
    if (allowNegative) sign = '-';
  }

  if (numberWithoutPonctuation) {
    return {
      value: `${sign}${number.toString()}`,
      unmask: `${sign}${number.toString()}`,
    };
  }

  const formatedNumber = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(number);
  return {
    value: `${prefix}${sign}${formatedNumber}${suffix}`,
    unmask: (() => {
      const arrFormated = formatedNumber.replace(/\D/g, '').split('');
      if (decimalPlaces > 0)
        arrFormated.splice(arrFormated.length - decimalPlaces, 0, '.');
      return `${sign}${arrFormated.join('')}`;
    })(),
  };
};
