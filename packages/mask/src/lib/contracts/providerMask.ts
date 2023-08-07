import { GeneralMaskInterface } from './generalMask';

export type ProviderInterface =
  | 'cpf'
  | 'cnpj'
  | 'nis'
  | 'phone'
  | 'cep'
  | 'boleto-bancario'
  | 'renavam'
  | 'cnh'
  | 'titulo-eleitor';

export interface ProviderMaskInterface extends Partial<GeneralMaskInterface> {
  value: string | number | null;
}

export interface MaskPhoneInterface extends ProviderMaskInterface {
  customPattern?: string;
  internationalNumber?: boolean;
  value: string | number | null;
}

export interface PaymentSlipMaskInterface extends ProviderMaskInterface {
  value: string | number | null;
  onlyType?: {
    typeDigits?: 'Cód. Barras' | 'Linha Digitável';
    typePaymentSlip: 'Boleto Bancário' | 'Boleto de Arrecadação';
  };
}

export type FormatMaskDateType =
  | 'DD/MM/YYYY'
  | 'DD-MM-YYYY'
  | 'MM-DD-YYYY'
  | 'MM/DD/YYYY'
  | 'YYYY/MM/DD'
  | 'YYYY-MM-DD'
  | 'DD/Mmm/YYYY'
  | 'DD-Mmm-YYYY'
  | 'DD/MMM/YYYY'
  | 'DD-MMM-YYYY';

export interface DateMaskInterface extends ProviderMaskInterface {
  value: string | number | null;
  patternDate: {
    mask: FormatMaskDateType;
    unmask: FormatMaskDateType;
  };
}
