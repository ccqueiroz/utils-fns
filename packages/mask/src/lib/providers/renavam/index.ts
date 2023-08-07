import {
  ProviderMaskInterface,
  ResponseGeneralMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerRenavam = (params: ProviderMaskInterface) => {
  const patternRenavam = patternsToUseInProvider.renavam;

  const renavamMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternRenavam,
    ...params,
  });

  return renavamMask;
};
