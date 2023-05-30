import { ParamsValidatorEmail } from '@utils-fns/validators/src/lib/contracts/index';
import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: EMAIL]', () => {
  it('Should be return false value when no arguments are passed to the email validation', () => {
    expect(validators.email({})).toBeFalsy();
  });
  it('Should be return false value when email argument does not comply with validation rules and not passed paramsValidatorEmail rules', () => {
    expect(validators.email({ email: 'foobar' })).toBeFalsy();
    expect(validators.email({ email: 'foobar-@validatior.com' })).toBeFalsy();
    expect(validators.email({ email: '-foobar@validatior.com' })).toBeFalsy();
    expect(validators.email({ email: 'fóobar@validatior.com' })).toBeFalsy();
    expect(validators.email({ email: 'foo@bar @validatior.com' })).toBeFalsy();
    expect(validators.email({ email: 'foo bar@validatior.com' })).toBeFalsy();
    expect(validators.email({ email: 'foobar@validation-.com' })).toBeFalsy();
    expect(validators.email({ email: 'foobar@validatior.com.' })).toBeFalsy();
    expect(
      validators.email({ email: 'foobar@validatior.com.-br' }),
    ).toBeFalsy();
    expect(validators.email({ email: 'foobar@validation' })).toBeFalsy();
  });
  it('Should be return true value when email argument is valid  and not passed paramsValidatorEmail rules', () => {
    expect(validators.email({ email: 'foobar@validator.com' })).toBeTruthy();
  });
  it('Should be return false value when email argument does not satisfy the rules paramsValidatorEmail with param minMaxUserNameEmail', () => {
    const rules: ParamsValidatorEmail = {
      minMaxUserNameEmail: { min: 9, max: 14 },
    };
    expect(
      validators.email({
        email: 'foobar@validator.com',
        paramsEmailValidator: rules,
      }),
    ).toBeFalsy();
    expect(
      validators.email({
        email: 'invalidemailtest@validator.com',
        paramsEmailValidator: rules,
      }),
    ).toBeFalsy();
  });
  it('Should be return false value when email argument does not satisfy the rules paramsValidatorEmail with param minMaxEmailDomain', () => {
    const rules: ParamsValidatorEmail = {
      minMaxEmailDomain: { min: 5, max: 7 },
    };
    expect(
      validators.email({
        email: 'foobar@test.com',
        paramsEmailValidator: rules,
      }),
    ).toBeFalsy();
    expect(
      validators.email({
        email: 'foobar@validator.com',
        paramsEmailValidator: rules,
      }),
    ).toBeFalsy();
  });
  it('Should be return false value when email argument does not satisfy the rules paramsValidatorEmail with param emailDomainName a simple string', () => {
    const rules: ParamsValidatorEmail = {
      emailDomainName: RegExp(/teste/),
    };
    expect(
      validators.email({
        email: 'foobar@validator.com',
        paramsEmailValidator: rules,
      }),
    ).toBeFalsy();
  });
  it('Should be return false value when email argument does not satisfy the rules paramsValidatorEmail with param emailDomainName a pattern regex string', () => {
    const rules: ParamsValidatorEmail = {
      emailDomainName: RegExp(/(gmail.com|hotmail.com)/),
    };
    expect(
      validators.email({
        email: 'foobar@validator.com',
        paramsEmailValidator: rules,
      }),
    ).toBeFalsy();
  });
  it('Shoulde be return true value when email argument satisfy all rules', () => {
    const rules: ParamsValidatorEmail = {
      emailDomainName: RegExp(/(gmail.com|hotmail.com)/),
      minMaxEmailDomain: { min: 5, max: 10 },
      minMaxUserNameEmail: { min: 5, max: 26 },
    };
    expect(
      validators.email({
        email: 'foobar@gmail.com',
        paramsEmailValidator: rules,
      }),
    ).toBeTruthy();
    expect(
      validators.email({
        email: 'foobar@hotmail.com',
        paramsEmailValidator: rules,
      }),
    ).toBeTruthy();
    expect(
      validators.email({
        email: 'foobar@validator.com',
        paramsEmailValidator: rules,
      }),
    ).not.toBeTruthy();
  });
});
