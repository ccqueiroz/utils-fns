/* eslint-disable prettier/prettier */
import { PaymentSlipValidator } from '../../../../contracts/paymentSlipValidator';
import { utils, TypesUtils } from '@utils-fns/utils';
import { validAmount } from '../../validAmount';
import { convertDatePaymentoSlipToDate } from '../../convertDate';
import { mod11AlgorithmAdapter } from '../mod11AlgorithAdapter';

interface BankSlipBarCode extends PaymentSlipValidator {
  digits: string;
}

export const bankSlipBarCode = ({
  digits,
  paramsPaymentSlipValidator,
}: BankSlipBarCode) => {
  const regexBarCode = new RegExp(/^[0-9]{44}$/);
  if (!regexBarCode.test(digits)) return false;
  const [
    bankCode,
    currencyCode,
    verifyingDigit,
    expiration,
    amount,
    otherInfos,
  ] = [
      digits.slice(0, 3),
      digits.slice(3, 4),
      digits.slice(4, 5),
      digits.slice(5, 9),
      digits.slice(9, 19),
      digits.slice(20, digits.length),
    ];
  const digitsToMod11 = `${bankCode}${currencyCode}${expiration}${amount}${otherInfos}`;
  const checkDigitWithMod11 = mod11AlgorithmAdapter(digitsToMod11, verifyingDigit);

  if (!checkDigitWithMod11) return false;
  if (paramsPaymentSlipValidator) {
    const { validByBank, validByDate, validByPrice } =
      paramsPaymentSlipValidator;
    if (validByBank) {
      const validBank = validByBank.length === 3 ?
        bankCode === validByBank.toString() :
        utils.filterBankByCode(bankCode as TypesUtils['BankCode']) === validByBank;
      if (!validBank) return false;
    }
    if (validByPrice) {
      const price = validAmount(amount, validByPrice);
      if (!price) return false;
    };
    if (validByDate) {
      const date = convertDatePaymentoSlipToDate(expiration, new Date(validByDate));
      if (!date) return false;
    };
  }
  return checkDigitWithMod11;
};