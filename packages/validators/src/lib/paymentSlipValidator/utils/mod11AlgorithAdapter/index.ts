import { utils } from '@utils-fns/utils';
export const mod11AlgorithmAdapter = (
  digits: string,
  codeChecker: number | string,
) => {
  const mod11 = utils.lunhMod11Algorithm({ digits });
  const resultMod11 = mod11 === 0 || mod11 === 10 || mod11 === 11 ? 1 : mod11;

  return resultMod11 === Number(codeChecker);
};
