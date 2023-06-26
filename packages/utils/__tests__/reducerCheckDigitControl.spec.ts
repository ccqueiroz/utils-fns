import { reducerCheckDigitControl } from './../src/lib/reducerCheckDigitControl/index';
describe('[UTILS: REDUCER_CHECK_DIGIT_CONTROL]', () => {
  it('Should return value 77 when passed 654321 with argument', () => {
    expect(reducerCheckDigitControl('654321')).toEqual(77);
    expect(reducerCheckDigitControl('123456')).not.toEqual(77);
  });
});
