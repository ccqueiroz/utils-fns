import { GeneralMaskInterface, ResponseMaskInterface } from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerGeneric = (params: GeneralMaskInterface) => {
  const genericMask: ResponseMaskInterface = generalMask({
    ...params,
  });

  return genericMask;
};
