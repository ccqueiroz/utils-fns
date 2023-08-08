import {
  ProviderMaskInterface,
  ResponseMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCpf = (params: ProviderMaskInterface) => {
  const patternCpf = patternsToUseInProvider.cpf;

  const cpfMask: ResponseMaskInterface = generalMask({
    pattern: patternCpf,
    ...params,
  });

  return cpfMask;
};
