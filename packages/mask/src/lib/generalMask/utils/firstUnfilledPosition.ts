import { FirstUnfilledPositionType, MasksInterface } from '../../contracts';
import { maskDefinition } from './maskDefinition';

export const firstUnfilledPosition = ({
  value,
  pattern,
  maskDefinitions,
}: FirstUnfilledPositionType) => {
  const v = value ? value.toString() : '';
  if (v?.toString() === '') {
    return 0;
  }

  if (v.length === pattern.length) {
    for (let index = pattern.length - 1; index >= 0; index -= 1) {
      const patternChar = pattern.charAt(index) as keyof MasksInterface;

      if (maskDefinition(patternChar, maskDefinitions)) {
        return index + 1;
      }
    }
  }
  return v.length;
};
