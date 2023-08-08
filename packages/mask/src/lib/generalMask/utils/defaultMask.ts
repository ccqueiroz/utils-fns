import { MasksInterface } from '../../contracts';

export const defaultMasks: MasksInterface = {
  //A: Irrelevant. Accepts uppercase and lower case
  A: {
    regExp: /[A-Za-z]/,
  },
  //a: Impeditive. Mandatory lower case.
  a: {
    regExp: /[a-z]/,
    transform: (char: string) => char.toLowerCase(),
  },
  //b: The system will convert the letter to lower case.
  b: {
    regExp: /[a-z]/,
    transform: (char: string) => char.toLowerCase(),
  },
  //U: Impeditive. Mandatory capital letter.
  U: {
    regExp: /[A-Z]/,
    transform: (char: string) => char.toUpperCase(),
  },
  //W: The system will convert the letter to upper case
  W: {
    regExp: /[A-Z]/,
    transform: (char: string) => char.toUpperCase(),
  },
  //9: Impeditive. accept only numbers
  9: {
    regExp: /[0-9]/,
  },
};
