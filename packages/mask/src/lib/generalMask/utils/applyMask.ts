import { ApplyMaskType, MasksInterface } from '../../contracts';
import { maskDefinition } from './maskDefinition';

export const applyMask = ({
  value,
  pattern,
  allowEmpty,
  maskDefinitions,
}: ApplyMaskType) => {
  let valueWithMask = '';
  const valueToFormat = value ? value.toString() : '';

  if (valueToFormat.length === 0 && allowEmpty) return '';

  let valueIndex = 0;

  for (let i = 0; i < pattern.length; i++) {
    const valueChar = valueToFormat.charAt(valueIndex);
    const patternChar = pattern.charAt(i) as keyof MasksInterface;
    const mask = maskDefinition(patternChar, maskDefinitions);

    if (mask) {
      if (valueChar) {
        const valueCharTest =
          patternChar.toString()?.match(/W|b/) && mask.transform
            ? mask?.transform(valueChar)
            : valueChar;

        if (mask.regExp.test(valueCharTest)) {
          valueWithMask = valueWithMask.concat(valueCharTest);
          valueIndex++;
        } else {
          return valueWithMask;
        }
      } else {
        return valueWithMask;
      }
    } else {
      valueWithMask = valueWithMask.concat(
        valueChar ? patternChar.toString() : '',
      );
    }
  }

  return valueWithMask;
};
