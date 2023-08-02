import { NormalizeValueType } from '../../contracts';
import { applyTransform } from './applyTransform';
import { reformatInput } from './reformatInput';
import { removePattern } from './removePattern';

export const normalizeValue = ({
  value,
  previousValue,
  pattern,
  allowEmpty,
  maskDefinitions,
  removedPattern,
}: NormalizeValueType) => {
  const inputValue = reformatInput({
    value,
    pattern,
    allowEmpty,
    maskDefinitions,
  });
  const removePatternValue = removePattern(
    inputValue,
    pattern,
    maskDefinitions,
  );
  const transformValue = applyTransform({
    value: removePatternValue,
    previousValue,
    pattern: removedPattern,
    maskDefinitions,
  });
  return transformValue;
};
