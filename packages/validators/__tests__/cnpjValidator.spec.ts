import validators from '@utils-fns/validators/src/lib/index';
describe('[VALIDATOR: CNPJ]', () => {
  it('Should be return false value when no arguments are passed to the cnpj validation', () => {
    expect(validators.cnpj()).toBeFalsy();
  });
  it('Should be return false value when argument passed is less than 14 digits', () => {
    expect(validators.cnpj('767121')).toBeFalsy();
  });
  it('Should return false value when argument passed has 14 equal digits', () => {
    expect(validators.cnpj('00000000000')).toBeFalsy();
  });
  it('Should be return false value when argument passed is not whitin cnpj validation logic', () => {
    expect(validators.cnpj('45243618000185')).toBeFalsy();
  });
  it('Should be return false value when argument passed has mask cnpj but is not whitin cnpj validation logic', () => {
    expect(validators.cnpj('16.078.147/0001-03')).toBeFalsy();
  });
  it('Should be return false value when argument has alphanumeric characters ans special characters other than "." and "-".', () => {
    expect(validators.cnpj('abc$/`9892121212')).toBeFalsy();
  });
  it('Should be return true value when argument passed has 14 digits and is whitin cnpj validation logic', () => {
    expect(validators.cnpj('22014929000102')).toBeTruthy();
  });
  it('Should be return true value when argument passed has a mask for cnpj and is valid', () => {
    expect(validators.cnpj('50.221.718/0001-86')).toBeTruthy();
  });
  it('Should be return true value when argument passed is more than 11 digits', () => {
    expect(validators.cnpj('703417160228787182')).toBeFalsy();
  });
});
