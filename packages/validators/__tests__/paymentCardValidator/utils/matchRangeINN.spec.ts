import { matchRangeINN } from './../../../src/lib/paymentCardValidator/utils/matchValidator/matchRangeINN';
describe('[VALIDATORS: MATCHRANGEINN]', () => {
  it('Should be return false when cardNumber is outside range', () => {
    const minMax = [90, 120];
    expect(matchRangeINN('0', minMax[0], minMax[1])).toBeFalsy();
    expect(matchRangeINN('30', minMax[0], minMax[1])).toBeFalsy();
    expect(matchRangeINN('555', minMax[0], minMax[1])).toBeFalsy();
    expect(matchRangeINN('109', minMax[0], minMax[1])).toBeFalsy();
    expect(matchRangeINN('90', minMax[0], minMax[1])).toBeTruthy();
    expect(matchRangeINN('99', minMax[0], minMax[1])).toBeTruthy();
  });
});
