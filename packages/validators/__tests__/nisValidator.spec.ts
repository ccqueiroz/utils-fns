import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: NIS]', () => {
  it('Should be return false value when no arguments are passed to the nis validation', () => {
    expect(validators.nis()).toBeFalsy();
  });
  it('Should be return false value when argument passed is less than 11 digits', () => {
    expect(validators.nis('767121')).toBeFalsy();
  });
  it('Should return false value when argument passed has 11 equal digits', () => {
    expect(validators.nis('00000000000')).toBeFalsy();
  });
  it('Should be return false value when argument passed is not whitin nis validation logic', () => {
    expect(validators.nis('01234567861')).toBeFalsy();
  });
  it('Should be return false value when argument passed has mask nis but is not whitin nis validation logic', () => {
    expect(validators.nis('901.62083.25-7')).toBeFalsy();
  });
  it('Should be return false value when argument has alphanumeric characters ans special characters other than "." and "-".', () => {
    expect(validators.nis('abc$/`98921212')).toBeFalsy();
  });
  it('Should be return true value when argument passed has 11 digits and is whitin nis validation logic', () => {
    expect(validators.nis('90152083257')).toBeTruthy();
  });
  it('Should be return true value when argument passed has a mask for nis and is valid', () => {
    expect(validators.nis('901.52083.25-7')).toBeTruthy();
  });
  it('Should be return true value when argument passed is more than 11 digits', () => {
    expect(validators.nis('703417160228787182')).toBeFalsy();
  });
});
