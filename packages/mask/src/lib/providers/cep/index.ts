import {
  ProviderMaskInterface,
  ResponseMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCep = (params: Omit<ProviderMaskInterface, 'pattern'>) => {
  const patternCep = patternsToUseInProvider.cep;

  const cepMask: ResponseMaskInterface = generalMask({
    pattern: patternCep,
    ...params,
  });

  return cepMask;
};
