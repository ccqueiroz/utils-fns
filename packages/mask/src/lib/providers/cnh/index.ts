import {
  ProviderMaskInterface,
  ResponseMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCnh = (params: ProviderMaskInterface) => {
  const patternCnh = patternsToUseInProvider.cnh;

  const cnhMask: ResponseMaskInterface = generalMask({
    pattern: patternCnh,
    ...params,
  });

  return cnhMask;
};
