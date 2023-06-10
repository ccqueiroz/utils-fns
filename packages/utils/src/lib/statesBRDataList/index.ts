import { CountriesBRDataList } from '../contracts/index';
import dataJson from './data.json';

/**
 * @returns CountriesBRDataList[] - returns a list with data from all states in Brazil
 */
export const mapState: Array<CountriesBRDataList> = dataJson;

/**
 *
 * @param {string | undefined} term - full term or part of the abbreviations of the states of Brazil
 * @returns CountriesBRDataList[] - returns a list with data from all states that match the argument
 */
export const searchCountriesByAbbreviation = (term?: string) =>
  mapState.filter((state) =>
    state.abbreviation
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );
/**
 *
 * @param {string | undefined} term - full term or part of the state name
 * @returns CountriesBRDataList[] - returns a list with data from all states that match the argument
 */
export const searchCountryByName = (term?: string) =>
  mapState.filter((state) =>
    state.stateName
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );
