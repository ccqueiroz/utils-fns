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
  providerPhone,
} from './providers';
import type {
  DateMaskInterface,
  EventHandleAdapter,
  FormatMaskDateType,
  GeneralMaskInterface,
  LocalesType,
  MaskNumbersInterface,
  MaskPhoneInterface,
  PaymentSlipMaskInterface,
  ResponseMaskInterface,
  TargetType,
} from './contracts';
import { maskNumbers } from './maskNumbers';

export type TypesMasks = {
  GeneralMaskInterface: GeneralMaskInterface;
  ResponseMaskInterface: ResponseMaskInterface;
  TargetType: TargetType;
  EventHandleAdapter: EventHandleAdapter;
  MaskPhoneInterface: MaskPhoneInterface;
  PaymentSlipMaskInterface: PaymentSlipMaskInterface;
  FormatMaskDateType: FormatMaskDateType;
  DateMaskInterface: DateMaskInterface;
  LocalesType: LocalesType;
  MaskNumbersInterface: MaskNumbersInterface;
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
  phone: providerPhone,
  generic: providerGeneric,
  maskNumber: maskNumbers,
};

export default mask;
