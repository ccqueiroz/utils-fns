/**
 * - References:
 * https://countrycode.org/
 * https://www.itmnetworks.com.br/ddi-dos-paises-codigos-internacionais-de-telefone
 * https://www.dadosmundiais.com/
 * https://www.itu.int/rec/T-REC-E.164-201011-I/
 * 201 countries are cataloged with their respective country codes (DDI) according to E.164.
 * 164 countries are cataloged with their respective country codes and national destination code.
 * If you find inconsistency in any country code or national destination code list,
 * please contact caio.cezar.dequeiroz@gmail.com or submit a PR.
 */
import { CountryData } from '../contracts/index';
import dataJson from './data.json';

export type CountriesDataList = Array<CountryData>;

export const countriesDataList: CountriesDataList = dataJson;

export const searchByAbbreviationAlpha3 = (term?: string) =>
  countriesDataList.filter((country) =>
    country.abbreviationAlpha3
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );
