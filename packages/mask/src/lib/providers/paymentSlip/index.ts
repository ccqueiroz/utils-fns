import {
  PaymentSlipMaskInterface,
  ResponseMaskInterface,
} from '../../contracts';
import { generalMask } from '../../generalMask';
import { controllerProviderPaymentSlip } from './controllerPatternPaymentSlip';

export const providerPaymentSlip = ({
  value,
  onlyType,
  ...params
}: PaymentSlipMaskInterface) => {
  const patternPaymentSlip = controllerProviderPaymentSlip({
    value,
    onlyType,
  });

  value = value?.toString().replace(/\D/g, '') || null;

  const paymentSlipMask: ResponseMaskInterface = generalMask({
    pattern: patternPaymentSlip,
    value,
    ...params,
  });

  return paymentSlipMask;
};
