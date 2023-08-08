import {
  ProviderMaskInterface,
  ResponseMaskInterface,
  patternsToUseInProvider,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerVoteRegister = (params: ProviderMaskInterface) => {
  const patternVoteRegister = patternsToUseInProvider['titulo-eleitor'];

  const VoteRegisterMask: ResponseMaskInterface = generalMask({
    pattern: patternVoteRegister,
    ...params,
  });

  return VoteRegisterMask;
};
