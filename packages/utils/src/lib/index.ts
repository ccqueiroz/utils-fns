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
};

import { luhnAlgorithm } from './lunhAlgorithm';

import { mapPaymentCardList } from './paymentCardDataList';

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
  mapPaymentCardList,
};

export default utils;
