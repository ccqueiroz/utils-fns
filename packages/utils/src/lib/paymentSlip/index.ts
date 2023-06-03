import { BankCode, BankNames, MapBankData } from '../contracts/paymentSlip';
import dataJson from './data.json';

/**
 * @returns MapBankData - returns a mapped list with the code and name of the Banks operating in Brazil
 *
 * References:
    @link https://blog.vhsys.com.br/numero-do-banco/
    @link https://portal.febraban.org.br/
 */
export const mapBankData: MapBankData = dataJson as MapBankData;

/**
 * @param {BankCode} key - bank code
 * @returns MapBankData - returns the name of the bank by its code
 */
export const filterBankByCode = (key: BankCode) => {
  return mapBankData[key];
};

/**
 * @param {BankCode} name - bank name
 * @returns MapBankData - returns the code of the bank by its name
 */
export const filterBankByName = (name: BankNames): BankCode | undefined => {
  return Object.keys(mapBankData).find(
    (key) => mapBankData[key as BankCode] === name,
  ) as BankCode | undefined;
};
