/* eslint-disable prettier/prettier */
import { PaymentSlipValidator } from '../../../../contracts/paymentSlipValidator';
import { utils, TypesUtils } from '@utils-fns/utils';
import { convertDatePaymentoSlipToDate } from '../convertDate';
import { validAmount } from '../../validAmount';
import { mod11AlgorithmAdapter } from '../../mod11AlgorithAdapter';
interface BankSlipTypeableLine extends PaymentSlipValidator {
  digits: string;
}

export const bankSlipTypeableLine = ({
  digits,
  paramsPaymentSlipValidator,
}: BankSlipTypeableLine) => {
  const regexBarCode = new RegExp(/^[0-9]{47}$/);
  if (!regexBarCode.test(digits)) return false;

  const [
    blockBankAndCurrency,
    blockFreeField1,
    blockFreeField2,
    generalCheckerCode,
    blockExpirationFactorAndAmount,
  ] = [
      digits.substring(0, 10),
      digits.substring(10, 21),
      digits.substring(21, 32),
      digits.substring(32, 33),
      digits.substring(33, digits.length),
    ];
  const transformTypeableLineToBarCode = `${digits.slice(0, 4)}${digits.slice(33, 37)}${digits.slice(37, 47)}${digits.slice(4, 9)}${digits.slice(10, 20)}${digits.slice(21, 31)}`
  const checkBlockValidationsMod10 =
    utils.lunhMod10Algorithm({ digits: blockBankAndCurrency, onlyValidCheckDigit: true })
    && (utils.lunhMod10Algorithm({ digits: blockFreeField1, onlyValidCheckDigit: true }))
    && utils.lunhMod10Algorithm({ digits: blockFreeField2, onlyValidCheckDigit: true });

  const checkCodeMod11 = mod11AlgorithmAdapter(transformTypeableLineToBarCode, Number(generalCheckerCode));

  if (!checkBlockValidationsMod10 || !checkCodeMod11) return false;
  if (paramsPaymentSlipValidator) {
    const { validByBank, validByDate, validByPrice } =
      paramsPaymentSlipValidator;
    if (validByBank) {
      const bankCode = blockBankAndCurrency.slice(0, 3);
      const validBank = validByBank.length === 3 ?
        bankCode === validByBank.toString() :
        utils.filterBankByCode(bankCode as TypesUtils['BankCode']) === validByBank;
      if (!validBank) return false;
    }

    if (validByPrice) {
      const amount = blockExpirationFactorAndAmount.slice(5, blockExpirationFactorAndAmount.length);
      const price = validAmount(amount, validByPrice);
      if (!price) return false;
    };
    if (validByDate) {
      const expiration = blockExpirationFactorAndAmount.slice(0, 4);
      const date = convertDatePaymentoSlipToDate(expiration, new Date(validByDate));
      if (!date) return false;
    };
  }
  return checkCodeMod11;
};
