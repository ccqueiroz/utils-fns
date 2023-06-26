import { CountryData } from '../contracts/index';
import dataJson from './data.json';
/**
 * @summary
 * - References:
 * 201 countries are cataloged with their respective country codes (DDI) according to E.164.
 * 164 countries are cataloged with their respective country codes and national destination code.
 * If you find inconsistency in any country code or national destination code list,
 * please contact caio.cezar.dequeiroz@gmail.com or submit a PR.
 * @see https://countrycode.org/
 * @see https://www.itmnetworks.com.br/ddi-dos-paises-codigos-internacionais-de-telefone
 * @see https://www.dadosmundiais.com/
 * @see https://www.itu.int/rec/T-REC-E.164-201011-I/
 */
export type CountriesDataList = Array<CountryData>;

/**
 * @returns CountryData[] - returns a list with data from all mapped countries
 */
export const countriesDataList: CountriesDataList = dataJson;

/**
 *
 * @param {string | undefined} term - full term or part of the abbreviations by alpha3 format
 * @returns StatesBRDataList[] - returns a list with data from all countries that match the argument
 */
export const searchCountryByAbbreviationAlpha3 = (term?: string) =>
  countriesDataList.filter((country) =>
    country.abbreviationAlpha3
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );
