import { utils, TypesUtils } from '@utils-fns/utils';
import { mod11AlgorithmAdapter } from '../../mod11AlgorithAdapter';
import { BankSlip } from '..';
import { convertAmount } from '../../convertAmount';
import { convertDatePaymentoSlip } from '../convertDate';

export const bankSlipBarCode = ({ digits, mapPaymentSlipData }: BankSlip) => {
  const regexBarCode = new RegExp(/^[0-9]{44}$/);
  if (!regexBarCode.test(digits)) return false;
  const digitBlocks = [
    digits.slice(0, 3), //bankCode
    digits.slice(3, 4), //currencyCode
    digits.slice(4, 5), //verifyingDigit
    digits.slice(5, 9), //expiration
    digits.slice(9, 19), //amount
    digits.slice(19, digits.length), //otherInfos
  ];

  const [bankCode, , verifyingDigit, expiration, amount, ,] = digitBlocks;

  const digitsToMod11 = digitBlocks
    .filter((_, currentIndex) => currentIndex !== 2)
    .join('');
  const checkDigitWithMod11 = mod11AlgorithmAdapter(
    digitsToMod11,
    verifyingDigit,
  );

  if (!checkDigitWithMod11) return false;

  mapPaymentSlipData.set('bankCode', bankCode);

  mapPaymentSlipData.set(
    'bankName',
    utils.filterBankByCode(bankCode as TypesUtils['BankCode']),
  );

  mapPaymentSlipData.set('price', convertAmount(amount));

  mapPaymentSlipData.set('expirationDate', convertDatePaymentoSlip(expiration));

  return checkDigitWithMod11;
};
