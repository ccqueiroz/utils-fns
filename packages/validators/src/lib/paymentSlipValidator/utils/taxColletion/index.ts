import {
  PaymentSlipValidator,
  barCodeOrTypeableLine,
} from '../../../contracts/paymentSlipValidator';
import { taxCollectionBarCode } from './taxCollectionBarCode';
import { taxCollectionTypeableLine } from './taxCollectionTypeableLine/index';

export interface TaxCollectionSlip
  extends Omit<PaymentSlipValidator, 'paramsPaymentSlipValidator'> {
  digits: string;
  mapPaymentSlipData: Map<unknown, unknown>;
}

export const taxColletionSlip = ({
  digits,
  mapPaymentSlipData,
}: TaxCollectionSlip) => {
  const isBarCodeOrTypeableLine =
    digits.length === 44
      ? barCodeOrTypeableLine.barcode.key
      : digits.length === 48
      ? barCodeOrTypeableLine.typeable_line.key
      : undefined;

  if (!isBarCodeOrTypeableLine) {
    return false;
  }

  mapPaymentSlipData.set('bankCode', null);
  mapPaymentSlipData.set('bankName', null);

  mapPaymentSlipData.set(
    'barCodeOrTypeableLine',
    barCodeOrTypeableLine[
      isBarCodeOrTypeableLine as keyof typeof barCodeOrTypeableLine
    ]?.type,
  );

  if (isBarCodeOrTypeableLine === barCodeOrTypeableLine.barcode.key) {
    return taxCollectionBarCode({ digits, mapPaymentSlipData });
  } else if (
    isBarCodeOrTypeableLine === barCodeOrTypeableLine.typeable_line.key
  ) {
    return taxCollectionTypeableLine({ digits, mapPaymentSlipData });
  } else {
    return false;
  }
};
