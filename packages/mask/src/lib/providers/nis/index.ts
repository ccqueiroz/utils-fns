import {
  ProviderMaskInterface,
  ResponseGeneralMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerNis = (params: ProviderMaskInterface) => {
  const patternNis = patternsToUseInProvider.nis;

  const nisMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternNis,
    ...params,
  });

  return nisMask;
};
