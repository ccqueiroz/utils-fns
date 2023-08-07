import {
  ProviderMaskInterface,
  ResponseGeneralMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCep = (params: ProviderMaskInterface) => {
  const patternCep = patternsToUseInProvider.cep;

  const cepMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternCep,
    ...params,
  });

  return cepMask;
};
