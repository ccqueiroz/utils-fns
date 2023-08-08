import { MaskNumbersInterface } from '../contracts';
import { formatValue } from './utils/formatValue';
import { normalizeValue } from './utils/normalizeValue';

export const maskNumbers = ({
  value,
  previousValue,
  prefix = '',
  suffix = '',
  decimalPlaces = 0,
  allowNegative = false,
  numberWithoutPonctuation,
  locale = 'pt-BR',
  event,
}: MaskNumbersInterface) => {
  try {
    if (decimalPlaces > 10) {
      throw new Error(
        'The Maximum value for maskNumber`s option `decimalPlaces` is 10',
      );
    }
    const normalizeNumber = normalizeValue({
      value,
      previousValue,
      decimalPlaces,
      prefix,
      suffix,
      allowNegative,
    });
    const format = formatValue({
      value: normalizeNumber,
      decimalPlaces,
      prefix,
      suffix,
      allowNegative,
      numberWithoutPonctuation,
      locale,
    });

    if (event) {
      if (
        event.target &&
        Object.prototype.hasOwnProperty.call(event.target, 'value') &&
        Object.prototype.hasOwnProperty.call(event.target, 'setSelectionRange')
      ) {
        setTimeout(() => {
          const caretPosition =
            (event?.target as HTMLInputElement).value.length -
            (suffix?.length ?? 0);
          (event?.target as HTMLInputElement).value = format.value;
          (event?.target as HTMLInputElement).setSelectionRange(
            caretPosition,
            caretPosition,
          );
        }, 10);
      }
    }
    return format;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('[MASKNUMBER-ERROR] - ', error);
    return { value: '', unmask: '' };
  }
};
