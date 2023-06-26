import { calculateWithMod10 } from './calculateWithMod10';

export const stateRegistrationBahia = (digits: string) => {
  const regexFormatStateRegistrationBahia = new RegExp(/^[0-9]{8,9}$/);

  if (!regexFormatStateRegistrationBahia.test(digits)) return false;

  return calculateWithMod10(digits);
};
