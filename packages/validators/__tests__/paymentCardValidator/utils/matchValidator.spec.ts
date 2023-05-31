import { matchValidator } from './../../../src/lib/paymentCardValidator/utils/matchValidator/index';
describe('[VALIDATORS: MATCHVALIDATOR]', () => {
  it('Should be return true when cardNumber is inside range', () => {
    const minMax = [110, 600];
    expect(matchValidator('55', minMax)).toBeFalsy();
    expect(matchValidator('210', minMax)).toBeTruthy();
  });
  it('Should be return false when patternINN matchers with cardNumber', () => {
    const minMax = [110, 600];
    expect(matchValidator('55', minMax[0])).toBeFalsy();
    expect(matchValidator('11065', minMax[0])).toBeTruthy();
  });
});
