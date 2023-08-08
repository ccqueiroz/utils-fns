import {
  ProviderMaskInterface,
  ResponseMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCnpj = (params: ProviderMaskInterface) => {
  const patternCnpj = patternsToUseInProvider.cnpj;

  const cnpjMask: ResponseMaskInterface = generalMask({
    pattern: patternCnpj,
    ...params,
  });

  return cnpjMask;
};
