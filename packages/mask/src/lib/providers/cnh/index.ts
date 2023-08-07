import {
  ProviderMaskInterface,
  ResponseGeneralMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCnh = (params: ProviderMaskInterface) => {
  const patternCnh = patternsToUseInProvider.cnh;

  const cnhMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternCnh,
    ...params,
  });

  return cnhMask;
};
