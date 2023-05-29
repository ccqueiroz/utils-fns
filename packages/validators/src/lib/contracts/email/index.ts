export type MinMaxParamsEmail = {
  min?: number;
  max?: number;
};

export type ParamsValidatorEmail = {
  minMaxUserNameEmail?: MinMaxParamsEmail;
  minMaxEmailDomain?: MinMaxParamsEmail;
  emailDomainName?: string;
};

export type EmailValidator = {
  email?: string;
  paramsEmailValidator?: ParamsValidatorEmail;
};
