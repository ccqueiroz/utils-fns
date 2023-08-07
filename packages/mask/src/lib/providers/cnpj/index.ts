import {
  ProviderMaskInterface,
  ResponseGeneralMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCnpj = (params: ProviderMaskInterface) => {
  const patternCnpj = patternsToUseInProvider.cnpj;

  const cnpjMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternCnpj,
    ...params,
  });

  return cnpjMask;
};
