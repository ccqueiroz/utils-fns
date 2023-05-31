import { matchPatternINN } from './matchPatternINN';
import { matchRangeINN } from './matchRangeINN';

export const matchValidator = (
  cardNumber: string,
  patternINN: number | Array<number>,
) => {
  if (Array.isArray(patternINN)) {
    return matchRangeINN(cardNumber, patternINN[0], patternINN[1]);
  }
  return matchPatternINN(cardNumber, patternINN);
};
