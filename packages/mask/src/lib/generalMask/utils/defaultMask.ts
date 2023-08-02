import { MasksInterface } from '../../contracts';

export const defaultMasks: MasksInterface = {
  A: {
    regExp: /[A-Za-z]/,
    transform: (char: string) => char.toUpperCase(),
  },
  a: {
    regExp: /[A-Za-z]/,
    transform: (char: string) => char.toUpperCase(),
  },
  U: {
    regExp: /[A-Z]/,
  },
  l: {
    regExp: /[a-z]/,
  },
  9: {
    regExp: /[0-9]/,
  },
};
