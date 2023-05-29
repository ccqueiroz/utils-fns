import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: CPF]', () => {
  it('Should be return false value when no arguments are passed to the cpf validation', () => {
    expect(validators.cpf()).toBeFalsy();
  });
  it('Should be return false value when argument passed is less than 11 digits', () => {
    expect(validators.cpf('767121')).toBeFalsy();
  });
  it('Should return false value when argument passed has 11 equal digits', () => {
    expect(validators.cpf('00000000000')).toBeFalsy();
  });
  it('Should be return false value when argument passed is not whitin cpf validation logic', () => {
    expect(validators.cpf('01234567861')).toBeFalsy();
  });
  it('Should be return false value when argument passed has mask cpf but is not whitin cpf validation logic', () => {
    expect(validators.cpf('012.345.678-66')).toBeFalsy();
  });
  it('Should be return false value when argument has alphanumeric characters ans special characters other than "." and "-".', () => {
    expect(validators.cpf('abc$/`98921212')).toBeFalsy();
  });
  it('Should be return true value when argument passed has 11 digits and is whitin cpf validation logic', () => {
    expect(validators.cpf('70341716022')).toBeTruthy();
  });
  it('Should be return true value when argument passed has a mask for cpf and is valid', () => {
    expect(validators.cpf('718.001.040-57')).toBeTruthy();
  });
  it('Should be return true value when argument passed is more than 11 digits', () => {
    expect(validators.cpf('703417160228787182')).toBeFalsy();
  });
});
