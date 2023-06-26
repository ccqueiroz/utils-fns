import { ParamsStateRegistrationValidator } from '../contracts';
import { factoryStateRegistrationValidatorByState } from './states';

export const stateRegistrationValidator = ({
  digits,
  uf,
}: ParamsStateRegistrationValidator) => {
  if (!digits || !uf) return false;
  if (/^P[0-9]{12}$/.test(digits)) {
    digits = digits?.replace(/\W/g, '');
  } else {
    digits = digits?.replace(/\D/g, '');
  }

  const isValid = factoryStateRegistrationValidatorByState(uf, digits);

  return isValid;
};
