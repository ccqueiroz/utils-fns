/* eslint-disable no-useless-escape */

export const escapeRegExp = (string: string) =>
  string.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
