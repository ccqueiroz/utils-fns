import {
  PaymentSlipMaskInterface,
  patternsToUseInProvider,
} from '../../../contracts';

export const controllerProviderPaymentSlip = ({
  onlyType,
  value,
}: Pick<PaymentSlipMaskInterface, 'onlyType' | 'value'>) => {
  value = value ? value.toString() : '';
  value = value.replace(/\D/g, '');
  let pattern = '';
  if (onlyType && onlyType.typePaymentSlip) {
    const typePaymentSlip = onlyType.typePaymentSlip.match(/Boleto Bancário/)
      ? 'bank'
      : 'taxColection';
    if (onlyType.typeDigits) {
      return onlyType.typeDigits.match(/Cód. Barras/)
        ? patternsToUseInProvider['boleto-bancario'][typePaymentSlip].b
        : patternsToUseInProvider['boleto-bancario'][typePaymentSlip].a;
    }
    if (typePaymentSlip === 'bank') {
      pattern =
        value.length > 44
          ? patternsToUseInProvider['boleto-bancario'].bank.a //typeable
          : patternsToUseInProvider['boleto-bancario'].bank.b; //barcode
    } else if (typePaymentSlip === 'taxColection') {
      pattern =
        value.length > 44
          ? patternsToUseInProvider['boleto-bancario'].taxColection.a //typeable
          : patternsToUseInProvider['boleto-bancario'].taxColection.b; //barcode
    }
    return pattern;
  }

  if (value.length <= 44) {
    pattern = patternsToUseInProvider['boleto-bancario'].taxColection.b;
  } else if (value.length > 44 && value.length <= 47) {
    pattern = patternsToUseInProvider['boleto-bancario'].bank.a;
  } else if (value.length > 47) {
    pattern = patternsToUseInProvider['boleto-bancario'].taxColection.a;
  }
  return pattern;
};
