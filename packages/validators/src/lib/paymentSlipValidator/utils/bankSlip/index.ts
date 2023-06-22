import {
  PaymentSlipValidator,
  barCodeOrTypeableLine,
  paymentSlipSegmentType,
} from '../../../contracts/paymentSlipValidator';
import { bankSlipBarCode } from './bankSlipBarCode';
import { bankSlipTypeableLine } from './bankSlipTypeableLine';

export interface BankSlip
  extends Omit<PaymentSlipValidator, 'paramsPaymentSlipValidator'> {
  digits: string;
  mapPaymentSlipData: Map<unknown, unknown>;
}

export const bankSlip = ({ digits, mapPaymentSlipData }: BankSlip) => {
  const isBarCodeOrTypeableLine =
    digits.length === 44
      ? barCodeOrTypeableLine.barcode.key
      : digits.length === 47
      ? barCodeOrTypeableLine.typeable_line.key
      : undefined;

  if (!isBarCodeOrTypeableLine) {
    return false;
  }

  mapPaymentSlipData.set(
    'barCodeOrTypeableLine',
    barCodeOrTypeableLine[
      isBarCodeOrTypeableLine as keyof typeof barCodeOrTypeableLine
    ]?.type,
  );

  mapPaymentSlipData.set(
    'segmentPaymentSplip',
    paymentSlipSegmentType.payment_bank_slip,
  );

  if (isBarCodeOrTypeableLine === barCodeOrTypeableLine.barcode.key) {
    return bankSlipBarCode({ digits, mapPaymentSlipData });
  } else if (
    isBarCodeOrTypeableLine === barCodeOrTypeableLine.typeable_line.key
  ) {
    return bankSlipTypeableLine({ digits, mapPaymentSlipData });
  } else {
    return false;
  }
};
