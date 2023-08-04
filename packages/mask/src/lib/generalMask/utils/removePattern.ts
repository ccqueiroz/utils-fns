import { MasksInterface } from '../../contracts';
import { maskDefinition } from './maskDefinition';

export const removePattern = (
  formattedValue: string | number,
  pattern: string,
  maskDefinitions: any,
) => {
  let finalValue = '';

  const value = formattedValue?.toString() ?? '';

  for (let i = 0; i < value.length; i++) {
    const valueChar = value.charAt(i);
    const patternChar = pattern.charAt(i) as keyof MasksInterface;
    const mask = maskDefinition(patternChar, maskDefinitions);

    if (mask) {
      if (mask.regExp.test(valueChar)) {
        finalValue = finalValue.concat(valueChar);
      }
    }
  }
  return finalValue;
};
