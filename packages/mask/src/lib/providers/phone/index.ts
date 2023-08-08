import { MaskPhoneInterface, ResponseMaskInterface } from '../../contracts';
import { generalMask } from '../../generalMask';
import { controllerProviderPhone } from './controllerPatternPhone';

export const providerPhone = ({
  customPattern,
  internationalNumber,
  value,
  ...params
}: MaskPhoneInterface) => {
  const patternPhone = controllerProviderPhone({
    internationalNumber,
    customPattern,
    value,
  });

  value = value?.toString().replace(/\D/g, '') || null;

  const phoneMask: ResponseMaskInterface = generalMask({
    pattern: patternPhone,
    value,
    ...params,
  });

  return phoneMask;
};
