import { MasksInterface, TargetType } from '../../contracts';
import { firstUnfilledPosition } from './firstUnfilledPosition';

export const goFirstUnfilledPosition = (
  target: TargetType,
  pattern: string,
  maskDefinitions: MasksInterface,
) => {
  const caretPos = firstUnfilledPosition({
    value: target.value,
    pattern,
    maskDefinitions,
  });
  target.setSelectionRange(caretPos, caretPos);
};
