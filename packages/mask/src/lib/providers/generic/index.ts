import {
  GeneralMaskInterface,
  ResponseGeneralMaskInterface,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerGeneric = (params: GeneralMaskInterface) => {
  const genericMask: ResponseGeneralMaskInterface = generalMask({
    ...params,
  });

  return genericMask;
};
