import { TypesUtils } from '@utils-fns/utils';

export const paymentSlipSegmentIdentification = {
  '1': 'municipal',
  '2': 'sanitation',
  '3': 'gas_energy',
  '4': 'telecom',
  '5': 'government_agencies',
  '6': 'others',
  '7': 'transit',
  '9': 'only_banks',
} as const;

export const paymentSlipSegmentType = {
  municipal: 'Taxas Municipais',
  sanitation: 'Taxas de Saneamento',
  gas_energy: 'Taxas de Energia Elétrica e Gás',
  telecom: 'Taxas de Telecomunicações',
  government_agencies: 'Taxas de Órgãos Governamentais',
  transit: 'Taxas de Trânsito',
  only_banks: 'Uso Exclusivo dos Bancos',
  payment_bank_slip: 'Pagamento de Boletos Bancários',
  others: 'Outros',
} as const;

export const barCodeOrTypeableLine = {
  barcode: { type: 'Cód. Barras', key: 'barcode' },
  typeable_line: { type: 'Linha Digitável', key: 'typeable_line' },
} as const;

export type ParamsPaymentSlipValidator = {
  validByBank?: TypesUtils['BankNames'] | TypesUtils['BankCode'];
  validSegmentType?: (typeof paymentSlipSegmentType)[keyof typeof paymentSlipSegmentType];
  validByPrice?: string | number;
  validByDate?: string | Date;
  validByTypeOfPaymentSlip?: 'Boleto Bancário' | 'Boleto de Arrecadação';
  validByIfIsBarCodeOrTypeableLine?: (typeof barCodeOrTypeableLine)[keyof typeof barCodeOrTypeableLine]['type'];
};

export type PaymentSlipValidator = {
  digits?: string;
  paramsPaymentSlipValidator?: ParamsPaymentSlipValidator;
};
