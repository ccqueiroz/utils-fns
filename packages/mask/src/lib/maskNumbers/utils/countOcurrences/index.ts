export const countOcurrences = (string: string, regexp: RegExp) =>
  (string.match(regexp) || []).length;
