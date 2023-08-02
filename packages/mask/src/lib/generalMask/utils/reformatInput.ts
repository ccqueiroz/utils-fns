import { MasksInterface, ReformatInputType } from '../../contracts';
import { applyMask } from './applyMask';
import { escapeRegExp } from './escapeRegExp';
import { maskDefinition } from './maskDefinition';

export const reformatInput = ({
  value,
  pattern,
  maskDefinitions,
  allowEmpty,
}: ReformatInputType) => {
  let finalValue = value ? value.toString() : '';

  for (let i = 0; i < pattern.length; i++) {
    const patternChar = pattern.charAt(i) as keyof MasksInterface;
    const mask = maskDefinition(patternChar, maskDefinitions);

    if (!mask) {
      const escapedPatternChar = escapeRegExp(patternChar.toString());
      finalValue = finalValue.replace(new RegExp(escapedPatternChar), '');
    }
  }

  return applyMask({
    value: finalValue,
    pattern,
    allowEmpty,
    maskDefinitions,
  });
};
