import {
  ProviderMaskInterface,
  ResponseGeneralMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerVoteRegister = (params: ProviderMaskInterface) => {
  const patternVoteRegister = patternsToUseInProvider['titulo-eleitor'];

  const VoteRegisterMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternVoteRegister,
    ...params,
  });

  return VoteRegisterMask;
};
