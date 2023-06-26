import { reducerCheckDigitControl } from './reducerCheckDigitControl/index';
import {
  mapCitiesByState,
  searchCitiesByIBGECode,
  searchCitiesByTerm,
  getCitiesListByState,
} from './citiesBRDataList';

import {
  countriesDataList,
  searchCountryByAbbreviationAlpha3,
} from './countriesDataList';

import {
  mapState,
  searchCitiesByStateAbbreviation,
  searchStateByName,
} from './statesBRDataList';

import type {
  CitiesBRDataList,
  StatesBRDataList,
  CountryData,
  MapCitiesByState,
  BrandCardType,
  StateAbbreviations,
  NameBrandCard,
  PaymentCardDataList,
  PaymentCardData,
  BankCode,
  BankNames,
  MapBankData,
} from './contracts/index';

export type TypesUtils = {
  CitiesBRDataList: CitiesBRDataList;
  StatesBRDataList: StatesBRDataList;
  CountryData: CountryData;
  MapCitiesByState: MapCitiesByState;
  BrandCardType: BrandCardType;
  StateAbbreviations: StateAbbreviations;
  NameBrandCard: NameBrandCard;
  PaymentCardDataList: PaymentCardDataList;
  PaymentCardData: PaymentCardData;
  BankCode: BankCode;
  BankNames: BankNames;
  MapBankData: MapBankData;
};

import { luhnAlgorithm } from './lunhAlgorithm';

import { lunhMod10Algorithm } from './lunhMod10Algorithm';

import { lunhMod11Algorithm } from './lunhMod11Algorithm';

import { mapPaymentCardList } from './paymentCardDataList';

import { mapBankData, filterBankByCode, filterBankByName } from './paymentSlip';

const utils = {
  mapCitiesByState,
  searchCitiesByIBGECode,
  searchCitiesByTerm,
  getCitiesListByState,
  countriesDataList,
  searchCountryByAbbreviationAlpha3,
  mapState,
  searchCitiesByStateAbbreviation,
  searchStateByName,
  luhnAlgorithm,
  lunhMod10Algorithm,
  lunhMod11Algorithm,
  mapPaymentCardList,
  mapBankData,
  filterBankByCode,
  filterBankByName,
  reducerCheckDigitControl,
};

export default utils;
