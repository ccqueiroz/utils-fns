import { ApplyTransformType, MasksInterface } from '../../contracts';
import { maskDefinition } from './maskDefinition';

export const applyTransform = ({
  value,
  previousValue,
  pattern,
  maskDefinitions,
}: ApplyTransformType) => {
  const valueToTransform = value ? value?.toString() : '';
  const previousValueToTransform = previousValue
    ? previousValue?.toString()
    : '';
  let transformed = '';

  for (let i = 0; i < valueToTransform.length; i++) {
    const valueChar = valueToTransform.charAt(i);
    const previousValueChar = previousValueToTransform.charAt(
      i,
    ) as keyof MasksInterface;

    if (valueChar !== previousValueChar) {
      const patternChar = pattern.charAt(i) as keyof MasksInterface;
      const mask = maskDefinition(patternChar, maskDefinitions);
      if (mask && mask.transform) {
        transformed = transformed.concat(mask.transform(valueChar));
      } else {
        transformed = transformed.concat(valueChar);
      }
    } else {
      transformed = transformed.concat(valueChar);
    }
  }

  return transformed;
};
