import { TargetType } from '../../contracts';

export const goNestedValidPosition = (
  target: TargetType,
  position: number,
  validPosition: Array<number>,
  direction: 'left' | 'right',
) => {
  let indexRight = 0;
  for (let index = 0; index <= validPosition.length; index++) {
    const element = validPosition[index];
    if (element > position) {
      indexRight = index;
      break;
    }
  }
  let caretPos;
  if (direction === 'left') {
    caretPos = validPosition[indexRight - 1];
  } else {
    caretPos = validPosition[indexRight];
  }
  if (caretPos === undefined) {
    const fallbackIndex = direction === 'left' ? 0 : validPosition.length - 1;
    caretPos = validPosition[fallbackIndex];
  }
  target.setSelectionRange(caretPos, caretPos);
};
