/* eslint-disable prettier/prettier */
import { TypesUtils } from '@utils-fns/utils';
export type PaymentSlipSegmentType =
  | 'muncipal'
  | 'sanitation'
  | 'gas_energy'
  | 'telecom'
  | 'government_agencies'
  | 'others'
  | 'transit'
  | 'only_banks';

export type ParamsPaymentSlipValidator = {
  validByBank?: TypesUtils['BankNames'] | TypesUtils['BankCode'];
  validByPrice?: string | number;
  validByDate?: string | Date;
  validByTypeOfPaymentSlip?: 'Boleto Bancário' | 'Boleto de Arrecadação';
  validByIfIsBarCodeOrTypeableLine?: 'Cód. Barras' | 'Linha Digitável';
};

export type PaymentSlipValidator = {
  digits?: string;
  paramsPaymentSlipValidator?: ParamsPaymentSlipValidator;
};
