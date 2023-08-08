import {
  ProviderMaskInterface,
  ResponseMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerNis = (params: ProviderMaskInterface) => {
  const patternNis = patternsToUseInProvider.nis;

  const nisMask: ResponseMaskInterface = generalMask({
    pattern: patternNis,
    ...params,
  });

  return nisMask;
};
