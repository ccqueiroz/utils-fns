/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/**
  Motivation:
    - Testing emails with dynamic patterns for the email domain and username.
  Details:
    - For the username:
      * Only alphanumeric characters and the set of characters . - _ will be accepted.
      * It must start with an alphanumeric character, and after that, it can be preceded by . - _
      * There can't be sequences of . - _; between each character, there must be at least 1 alphanumeric character.
      * The end of the email name cannot end with . - _
    - For the email domain:
      * Domains with a minimum of 2 characters and a maximum of 26 characters will be accepted (according to the domain registration rules at
        https://registro.br/dominio/regras/). If there is a need for minimum and/or maximum values for the domain, you should use the
        @param{paramsEmailValidator.minMaxEmailDomain}.
      * It may contain characters of type . - _, but there can't be sequences of these characters.
      * If there is a need to validate a specific domain or with specific regex rules, you can use the @param{paramsEmailValidator.emailDomainName}.

    Example:
      const emailIsValid = emailValidator({ email: 'jon.doe@hotmail.com', paramsEmailValidator: {
        emailDomainName: 'hotmail',
        minMaxUserNameEmail: {max: 15}
      }});
      console.log('is it a valid email?: ', emailIsValid) // true
      * Atention:
    - When passing arguments that will be used in the size rules of the username or domain, the expected value should be passed decreased by 1 unit.
      ** Exemple:
        The minimum size of the username should be 10 characters, and the maximum size should be 15 characters. In @param{paramsEmailValidator.minMaxUserNameEmail},
        the argument to be used is: { min: 9, max: 14 }.
*/

import { EmailValidator } from "../contracts/index";

export const emailValidator = ({
  email,
  paramsEmailValidator,
}: EmailValidator): boolean => {
  if (!email) return false;
  const patternValidator = `^(([a-zA-Z0-9][\-_.]{0,1})){${paramsEmailValidator?.minMaxUserNameEmail?.min ?? 1
    },${paramsEmailValidator?.minMaxUserNameEmail?.max ?? ''}}([a-zA-Z0-9]@)${paramsEmailValidator?.emailDomainName ?? `(([a-zA-Z0-9][-.]{0,1}){${paramsEmailValidator?.minMaxEmailDomain?.min ?? 2
    },${paramsEmailValidator?.minMaxEmailDomain?.max ?? 26
    }})([a-zA-Z0-9][.]{1}[a-zA-Z0-9]+)$`}`;

  const regexValidator = new RegExp(patternValidator);
  return regexValidator.test(email);
};
