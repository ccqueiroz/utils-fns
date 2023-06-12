import { PaymentSlipValidator } from '../../../contracts/paymentSlipValidator';
import { taxCollectionBarCode } from './taxCollectionBarCode';
import { taxCollectionTypeableLine } from './taxCollectionTypeableLine/index';

interface TaxCollectionSlip extends PaymentSlipValidator {
  digits: string;
}

export const taxColletionSlip = ({
  digits,
  paramsPaymentSlipValidator,
}: TaxCollectionSlip) => {
  const barCodeOrTypeableLine = {
    barcode: { type: 'Cód. Barras', key: 'barcode' },
    typeable_line: { type: 'Linha Digitável', key: 'typeable_line' },
  };

  const isBarCodeOrTypeableLine =
    digits.length === 44
      ? barCodeOrTypeableLine.barcode.key
      : digits.length === 48
      ? barCodeOrTypeableLine.typeable_line.key
      : undefined;

  const validByIfIsBarCodeOrTypeableLine =
    paramsPaymentSlipValidator?.validByIfIsBarCodeOrTypeableLine;

  const isTypeMismatch =
    validByIfIsBarCodeOrTypeableLine &&
    validByIfIsBarCodeOrTypeableLine !==
      barCodeOrTypeableLine[
        isBarCodeOrTypeableLine as keyof typeof barCodeOrTypeableLine
      ]?.type;

  if (isTypeMismatch) {
    return false;
  }

  if (isBarCodeOrTypeableLine === barCodeOrTypeableLine.barcode.key) {
    return taxCollectionBarCode({ digits, paramsPaymentSlipValidator });
  } else if (
    isBarCodeOrTypeableLine === barCodeOrTypeableLine.typeable_line.key
  ) {
    return taxCollectionTypeableLine({ digits, paramsPaymentSlipValidator });
  } else {
    return false;
  }
};
