import { FormatValueType } from '../../contracts';
import { applyMask } from './applyMask';

export const formatValue = ({
  value,
  pattern,
  allowEmpty,
  maskDefinitions,
}: FormatValueType) => {
  const valueFormated = applyMask({
    value,
    pattern,
    allowEmpty,
    maskDefinitions,
  });

  return valueFormated;
};
