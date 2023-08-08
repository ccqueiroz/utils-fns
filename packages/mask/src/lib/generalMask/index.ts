import {
  GeneralMaskInterface,
  ResponseMaskInterface,
  TargetType,
} from '../contracts';
import {
  defaultMasks,
  formatValue,
  goFirstUnfilledPosition,
  goNestedValidPosition,
  normalizeValue,
  removePattern,
  validCaretPositions,
} from './utils';

export const generalMask = ({
  pattern,
  value,
  previousValue,
  allowEmpty,
  event,
}: GeneralMaskInterface): ResponseMaskInterface => {
  try {
    if (!pattern) {
      throw new Error(
        'pattern not found. Please inform which pattern will be used.',
      );
    }
    const maskDefinitions = defaultMasks;
    const validPosition = validCaretPositions(pattern, maskDefinitions);
    if (validPosition.length === 0) {
      throw new Error(`The pattern {${pattern}} passed for is not valid.`);
    }
    const normalize = normalizeValue({
      value,
      previousValue,
      pattern,
      allowEmpty,
      maskDefinitions,
      removedPattern: removePattern(pattern, pattern, maskDefinitions),
    });

    const format = formatValue({
      value: normalize,
      pattern,
      allowEmpty,
      maskDefinitions,
    });

    if (event) {
      if (
        event.target &&
        Object.prototype.hasOwnProperty.call(event.target, 'value') &&
        Object.prototype.hasOwnProperty.call(event.target, 'selectionStart') &&
        Object.prototype.hasOwnProperty.call(event.target, 'setSelectionRange')
      ) {
        const previousSelection = (event?.target as HTMLInputElement)
          .selectionStart;
        const previousTargetValue = (event?.target as HTMLInputElement).value;
        setTimeout(() => {
          switch (event.type) {
            case 'change':
              if (
                (event?.target as HTMLInputElement).value.length ===
                  previousTargetValue.length + 1 &&
                previousSelection &&
                (event?.target as HTMLInputElement).value.charAt(
                  previousSelection,
                ) === pattern.charAt(previousSelection)
              ) {
                goNestedValidPosition(
                  event.target as TargetType,
                  previousSelection,
                  validPosition,
                  'left',
                );
                break;
              }
              goFirstUnfilledPosition(
                event.target as TargetType,
                pattern,
                maskDefinitions,
              );
              break;
            case 'focus':
              goFirstUnfilledPosition(
                event.target as TargetType,
                pattern,
                maskDefinitions,
              );
              break;
            default:
              break;
          }
        }, 10);
      }
    }
    const removedPattern = removePattern(format, pattern, maskDefinitions);

    return {
      value: format,
      unmask: removedPattern,
    };
  } catch (error) {
    console.log('[GENERALMASK-ERROR] - ', error);
    return {
      value: '',
      unmask: '',
    };
  }
};
