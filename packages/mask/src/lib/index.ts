import {
  providerCep,
  providerCnh,
  providerCnpj,
  providerCpf,
  providerDate,
  providerGeneric,
  providerNis,
  providerPaymentSlip,
  providerRenavam,
  providerVoteRegister,
} from './providers';
import type {
  DateMaskInterface,
  EventHandleAdapter,
  FormatMaskDateType,
  GeneralMaskInterface,
  MaskPhoneInterface,
  PaymentSlipMaskInterface,
  ResponseGeneralMaskInterface,
  TargetType,
} from './contracts';

export type TypesMasks = {
  GeneralMaskInterface: GeneralMaskInterface;
  ResponseGeneralMaskInterface: ResponseGeneralMaskInterface;
  TargetType: TargetType;
  EventHandleAdapter: EventHandleAdapter;
  MaskPhoneInterface: MaskPhoneInterface;
  PaymentSlipMaskInterface: PaymentSlipMaskInterface;
  FormatMaskDateType: FormatMaskDateType;
  DateMaskInterface: DateMaskInterface;
};

export const mask = {
  cep: providerCep,
  cnh: providerCnh,
  cnpj: providerCnpj,
  cpf: providerCpf,
  date: providerDate,
  nis: providerNis,
  paymentSlip: providerPaymentSlip,
  renavam: providerRenavam,
  voteRegister: providerVoteRegister,
  generic: providerGeneric,
};

export default mask;
