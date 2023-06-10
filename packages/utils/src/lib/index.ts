import {
  mapCitiesByState,
  searchCitiesByIBGECode,
  searchCitiesByTerm,
  getCitiesListByState,
} from './citiesBRDataList';

import {
  countriesDataList,
  searchByAbbreviationAlpha3,
} from './countriesDataList';

import {
  mapState,
  searchCountriesByAbbreviation,
  searchCountryByName,
} from './statesBRDataList';

import type {
  CitiesBRDataList,
  CountriesBRDataList,
  CountryData,
  MapCitiesByState,
  BrandCardType,
  CitiesByState,
  NameBrandCard,
  PaymentCardDataList,
  PaymentCardData,
  BankCode,
  BankNames,
  MapBankData,
} from './contracts/index';

export type TypesUtils = {
  CitiesBRDataList: CitiesBRDataList;
  CountriesBRDataList: CountriesBRDataList;
  CountryData: CountryData;
  MapCitiesByState: MapCitiesByState;
  BrandCardType: BrandCardType;
  CitiesByState: CitiesByState;
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
  searchByAbbreviationAlpha3,
  mapState,
  searchCountriesByAbbreviation,
  searchCountryByName,
  luhnAlgorithm,
  lunhMod10Algorithm,
  lunhMod11Algorithm,
  mapPaymentCardList,
  mapBankData,
  filterBankByCode,
  filterBankByName,
};

export default utils;
