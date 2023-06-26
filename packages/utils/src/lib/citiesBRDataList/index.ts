import { MapCitiesByState } from '../contracts/index';
import dataJson from './data.json';

/**
 * @returns StatesBRDataList[] - returns a mapped list with data from all cities separated by states in Brazil
 *
 * References:
 * @see https://www.cidade-brasil.com.br/
 * @see https://cidades.ibge.gov.br/
 * @see https://pt.wikipedia.org/wiki/Discagem_direta_%C3%A0_dist%C3%A2ncia
 *
 * 5570 cities are cataloged with their respective ibge codes according to IBGE
 * If you find inconsistency in any city, please contact caio.cezar.dequeiroz@gmail.com or submit a PR.
 * @see https://cidades.ibge.gov.br/.
 */
export const mapCitiesByState: MapCitiesByState = dataJson;

/**
 *
 * @param {string | undefined} state - key that represents the abbreviated name of the states of Brazil
 * @returns StatesBRDataList[] - returns a mapped list with data from all cities that are included within the searched state of Brazil
 */
export const getCitiesListByState = (state: keyof MapCitiesByState) => {
  return mapCitiesByState[state];
};
/**
 *
 * @param {string | undefined} state - abbreviated name of the state
 * @param {string | undefined} term - full term or part of the city name
 * @returns StatesBRDataList[] - returns a list with data from all cities that match the argument
 */
export const searchCitiesByTerm = (
  state: keyof MapCitiesByState,
  term?: string,
) =>
  (mapCitiesByState[state] ?? []).filter((city) =>
    city.cityName.toLocaleLowerCase().includes(term?.toLocaleLowerCase() ?? ''),
  );

/**
 *
 * @param {string | undefined} state - abbreviated name of the state
 * @param {string | undefined} ibgeCode - city ibge code
 * @returns StatesBRDataList[] - returns a list with data from all cities that match the argument
 */
export const searchCitiesByIBGECode = (
  state: keyof MapCitiesByState,
  ibgeCode?: string,
) => {
  const arrStates = mapCitiesByState[state];
  if (!ibgeCode) return arrStates;

  return arrStates.filter((state) => state.ibgeCode.includes(ibgeCode));
};
