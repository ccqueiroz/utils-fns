import {
  PaymentSlipMaskInterface,
  ResponseGeneralMaskInterface,
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

  const paymentSlipMask: ResponseGeneralMaskInterface = generalMask({
    pattern: patternPaymentSlip,
    value,
    ...params,
  });

  return paymentSlipMask;
};
