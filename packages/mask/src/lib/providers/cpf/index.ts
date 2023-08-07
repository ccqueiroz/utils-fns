import {
  ProviderMaskInterface,
  ResponseGeneralMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerCpf = (params: ProviderMaskInterface) => {
  const patternCpf = patternsToUseInProvider.cpf;

  const cpfMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternCpf,
    ...params,
  });

  return cpfMask;
};
