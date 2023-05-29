import { normalizeToValidation } from '../src/helpers/normalizeToValidation/index';

describe('[HELPERS: NormalizeToValidation]', () => {
  it('Should be return false value when no arguments are passed', () => {
    expect(normalizeToValidation({})).toBeFalsy();
  });
  it('Should be return false value when size value passed with argument to be different than length argument', () => {
    const LENGH_ARGUMENT = 11;
    expect(
      normalizeToValidation({ value: '1121', length: LENGH_ARGUMENT }),
    ).toBeFalsy();
  });
  it('Should be return false value when canRepeatNumber argument are passed value to equal false or not passed and value argument all numbers are the same.', () => {
    const LENGH_ARGUMENT = 3;
    expect(
      normalizeToValidation({ value: '111', length: LENGH_ARGUMENT }),
    ).toBeFalsy();
  });
  it('Should be return value when value passed typeof number and not passed length argument.', () => {
    expect(normalizeToValidation({ value: 123 })).toEqual('123');
  });
  it('Should be return value when value passed typeof string, but to be number and not passed length argument.', () => {
    expect(normalizeToValidation({ value: '123' })).toEqual('123');
  });
  it('Should be return value when value passed typeof string, but to be number and equal values when not passed length argument and canRepeatNumber to equal true.', () => {
    expect(
      normalizeToValidation({ value: '111', canRepeatNumber: true }),
    ).toEqual('111');
  });
  it('Should be return value when value passed typeof number, but to be number and equal values when not passed length argument and canRepeatNumber to equal true.', () => {
    expect(
      normalizeToValidation({ value: 111, canRepeatNumber: true }),
    ).toEqual('111');
  });
  it('Should be return value when value passed typeof number, but to be number and equal values when passed length argument and canRepeatNumber to equal true.', () => {
    expect(
      normalizeToValidation({ value: 111, length: 3, canRepeatNumber: true }),
    ).toEqual('111');
  });
});
