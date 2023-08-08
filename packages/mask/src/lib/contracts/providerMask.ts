import { GeneralMaskInterface } from './index';

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

export interface PaymentSlipMaskInterface
  extends Omit<ProviderMaskInterface, 'pattern'> {
  value: string | number | null;
  onlyType?: {
    typeDigits?: 'Cód. Barras' | 'Linha Digitável';
    typePaymentSlip: 'Boleto Bancário' | 'Boleto de Arrecadação';
  };
}

export type FormatMaskDateType =
  | 'DD/MM/YYYY'
  | 'DD-MM-YYYY'
  | 'DD/Mmm/YYYY'
  | 'DD-Mmm-YYYY'
  | 'DD/MMM/YYYY'
  | 'DD-MMM-YYYY'
  | 'MM-DD-YYYY'
  | 'MM/DD/YYYY'
  | 'MMM-DD-YYYY'
  | 'MMM/DD/YYYY'
  | 'Mmm/DD/YYYY'
  | 'Mmm-DD-YYYY'
  | 'YYYY/MM/DD'
  | 'YYYY-MM-DD'
  | 'YYYY/Mmm/DD'
  | 'YYYY-Mmm-DD'
  | 'YYYY/MMM/DD'
  | 'YYYY-MMM-DD';

export interface DateMaskInterface
  extends Omit<ProviderMaskInterface, 'pattern'> {
  value: string | number | null;
  patternDate: {
    mask: FormatMaskDateType;
    unmask: FormatMaskDateType;
  };
}
