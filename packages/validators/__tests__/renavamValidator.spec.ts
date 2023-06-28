import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: RENAVAM]', () => {
  it('Should be return false value when no arguments are passed to the renavam validation', () => {
    expect(validators.renavam()).toBeFalsy();
  });
  it('Should be return false value when argument passed is less than 11 digits', () => {
    expect(validators.renavam('0880473')).toBeFalsy();
  });
  it('Should return false value when argument passed has 11 equal digits', () => {
    expect(validators.renavam('00000000000')).toBeFalsy();
  });
  it('Should be return false value when argument passed is not whitin renavam validation logic', () => {
    expect(validators.renavam('01234567861')).toBeFalsy();
  });
  it('Should be return false value when argument has alphanumeric characters ans special characters other than "." and "-".', () => {
    expect(validators.renavam('abc$/`98921212')).toBeFalsy();
  });
  it('Should be return true value when argument passed has 11 digits and is whitin renavam validation logic', () => {
    expect(validators.renavam('08804737318')).toBeTruthy();
    expect(validators.renavam('33671794325')).toBeTruthy();
    expect(validators.renavam('45102292230')).toBeTruthy();
    expect(validators.renavam('72694552809')).toBeTruthy();
  });
  it('Should be return true value when argument passed is more than 11 digits', () => {
    expect(validators.renavam('703417160228787182')).toBeFalsy();
  });
});
