import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: VOTER_REGISTRATION_VALIDATIONA]', () => {
  it('Should be return false value when no arguments are passed to the voter registration validation', () => {
    expect(validators.voterRegistration('')).toBeFalsy();
  });
  it('Should be return false value when argument passed is less than 12 digits', () => {
    expect(validators.voterRegistration('767121')).toBeFalsy();
  });
  it('Should return false value when argument passed has 12 equal digits', () => {
    expect(validators.voterRegistration('000000000000')).toBeFalsy();
  });
  it('Should be return false value when argument passed is not whitin cpf validation logic', () => {
    expect(validators.voterRegistration('01234567861')).toBeFalsy();
  });
  it('Should be return false value when argument passed has mask voter registration but is not whitin voter registration validation logic', () => {
    expect(validators.voterRegistration('0123.4567.8901')).toBeFalsy();
  });
  it('Should be return false value when argument has alphanumeric characters ans special characters other than "." and "-".', () => {
    expect(validators.voterRegistration('abc$/`98921212')).toBeFalsy();
  });
  it('Should be return true value when argument passed has 12 digits and is whitin voter registration validation logic', () => {
    expect(validators.voterRegistration('077212110787')).toBeTruthy();
  });
  it('Should be return true value when argument passed has a mask for voter registration and is valid', () => {
    expect(validators.voterRegistration('0772.1211.0787')).toBeTruthy();
  });
  it('Should be return true value when argument passed voter registration belonging to São Paulo', () => {
    expect(validators.voterRegistration('104062710116')).toBeTruthy();
  });
  it('Should be return true value when argument passed voter registration belonging to Minas Gerais', () => {
    expect(validators.voterRegistration('465723620248')).toBeTruthy();
    expect(validators.voterRegistration('613752510213')).toBeTruthy();
  });
  it('Should be return true value when argument passed is more than 12 digits', () => {
    expect(validators.voterRegistration('703417160228787182')).toBeFalsy();
  });
});
