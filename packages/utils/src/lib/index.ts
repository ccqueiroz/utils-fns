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

export type {
  CitiesBRDataList,
  CountriesBRDataList,
  CountryData,
  MapCitiesByState,
} from './contracts/index';

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
};

export default utils;
