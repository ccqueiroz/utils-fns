import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: CNH]', () => {
  it('Should be return false value when no arguments are passed to the cnh validation', () => {
    expect(validators.cnh()).toBeFalsy();
  });
  it('Should be return false value when argument passed is less than 11 digits', () => {
    expect(validators.cnh('4542610')).toBeFalsy();
  });
  it('Should return false value when argument passed has 11 equal digits', () => {
    expect(validators.cnh('00000000000')).toBeFalsy();
  });
  it('Should be return false value when argument passed is not whitin cnh validation logic', () => {
    expect(validators.cnh('01234567861')).toBeFalsy();
  });
  it('Should be return false value when argument has alphanumeric characters ans special characters other than "." and "-".', () => {
    expect(validators.cnh('abc$/`98921212')).toBeFalsy();
  });
  it('Should be return true value when argument passed has 11 digits and is whitin cnh validation logic', () => {
    expect(validators.cnh('45426105401')).toBeTruthy();
  });
  it('Should be return true value when argument passed is more than 11 digits', () => {
    expect(validators.cnh('703417160228787182')).toBeFalsy();
  });
});
