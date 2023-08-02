import { GeneralMaskInterface, TargetType } from '../contracts';
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
}: GeneralMaskInterface) => {
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
    const removedPattern = removePattern(pattern, pattern, maskDefinitions);

    const normalize = normalizeValue({
      value,
      previousValue,
      pattern,
      allowEmpty,
      maskDefinitions,
      removedPattern,
    });

    const format = formatValue({
      value: normalize,
      pattern,
      allowEmpty,
      maskDefinitions,
    });

    if (event) {
      if (event.target && event.target instanceof HTMLInputElement) {
        const previousSelection = event.target.selectionStart;
        const previousValue = event.target.value;
        setTimeout(() => {
          switch (event.type) {
            case 'change':
              if (
                (event?.target as HTMLInputElement).value.length ===
                  previousValue.length + 1 &&
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
    return format;
  } catch (error) {
    console.log('[GENERALMASK-ERROR] - ', error);
    return '';
  }
};
