import { matchPatternINN } from './../../../src/lib/paymentCardValidator/utils/matchValidator/matchPatternINN';
describe('[VALIDATORS: MATCHPATTERNINN]', () => {
  it('Should be return false when patternINN dont matchs with cardNumber', () => {
    expect(matchPatternINN('55', 45)).toBeFalsy();
    expect(matchPatternINN('4567', 4568)).toBeFalsy();
    expect(matchPatternINN('00', 4568)).toBeFalsy();
    expect(matchPatternINN('456', 4568)).toBeTruthy();
    expect(matchPatternINN('456890', 4568)).toBeTruthy();
  });
  it('Should be return true when cardNumber is greater than patternINN and values matchs', () => {
    expect(matchPatternINN('4', 45)).toBeTruthy();
    expect(matchPatternINN('45', 45)).toBeTruthy();
    expect(matchPatternINN('456', 45)).toBeTruthy();
  });
});
