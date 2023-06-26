import { generalValidationStateRegistration } from './generalValidationStateRegistration';
import { ruralValidationStateRegistration } from './ruralValidationStateRegistration';

export type GeneralValidationStateRegistration = {
  digits: string;
  checkDigits: Array<string>;
};

export const stateRegistrationSaoPaulo = (digits: string) => {
  const regexFormatStateRegistrationSaoPaulo = new RegExp(
    /(^P[0-9]{12}$)|(^[0-9]{12}$)/,
  );

  if (!regexFormatStateRegistrationSaoPaulo.test(digits)) return false;

  const validationRuralStateRegistration =
    digits.length === 13 && digits.charAt(0) === 'P';

  let baseDigits: string | Array<string>;
  let checkDigits: Array<string> = [];

  let isValid;
  if (validationRuralStateRegistration) {
    //rural state registration
    baseDigits = digits.slice(1, 9);
    checkDigits.push(digits.charAt(9));
    isValid = ruralValidationStateRegistration({
      digits: baseDigits,
      checkDigits,
    });
  } else {
    baseDigits = digits;
    checkDigits = (digits.charAt(8) + digits.charAt(digits.length - 1)).split(
      '',
    );
    isValid = generalValidationStateRegistration({
      digits: baseDigits,
      checkDigits,
    });
  }

  return isValid;
};
