export type CustomPatternPhone = {
  coutryCode: RegExp;
  areaStateCode: RegExp;
  phoneNumber: RegExp;
};

export type ParamsPhoneValidator = {
  onlyMobilePhoneBR?: boolean;
  canReceiveInternationalNumbers?: boolean;
  customPatternPhone?: CustomPatternPhone;
  publicUtilityNumberBR?: boolean;
  numberWithoutCodeAreas?: boolean;
};

export type PhoneValidator = {
  phone?: string;
  paramsPhoneValidator?: ParamsPhoneValidator;
};
