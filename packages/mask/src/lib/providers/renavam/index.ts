import {
  ProviderMaskInterface,
  ResponseMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerRenavam = (params: ProviderMaskInterface) => {
  const patternRenavam = patternsToUseInProvider.renavam;

  const renavamMask: ResponseMaskInterface = generalMask({
    pattern: patternRenavam,
    ...params,
  });

  return renavamMask;
};
