import { StatesBRDataList } from '../contracts/index';
import dataJson from './data.json';

/**
 * @returns StatesBRDataList[] - returns a list with data from all states in Brazil
 */
export const mapState: Array<StatesBRDataList> = dataJson;

/**
 *
 * @param {string | undefined} term - full term or part of the abbreviations of the states of Brazil
 * @returns StatesBRDataList[] - returns a list with data from all states that match the argument
 */
export const searchCitiesByStateAbbreviation = (term?: string) =>
  mapState.filter((state) =>
    state.abbreviation
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );
/**
 *
 * @param {string | undefined} term - full term or part of the state name
 * @returns StatesBRDataList[] - returns a list with data from all states that match the argument
 */
export const searchStateByName = (term?: string) =>
  mapState.filter((state) =>
    state.stateName
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );
