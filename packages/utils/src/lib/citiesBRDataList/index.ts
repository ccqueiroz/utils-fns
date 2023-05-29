/**
 * - Reference:
 * https://www.cidade-brasil.com.br/
 * https://cidades.ibge.gov.br/
 * https://pt.wikipedia.org/wiki/Discagem_direta_%C3%A0_dist%C3%A2ncia
 * 5570 cities are cataloged with their respective ibge codes according to https://cidades.ibge.gov.br/.
 * If you find inconsistency in any city, please contact caio.cezar.dequeiroz@gmail.com or submit a PR.
 */
import { MapCitiesByState } from '../contracts/index';
import dataJson from './data.json';

export const mapCitiesByState: MapCitiesByState = dataJson;

export const getCitiesListByState = (state: keyof MapCitiesByState) => {
  return mapCitiesByState[state];
};

export const searchCitiesByTerm = (
  state: keyof MapCitiesByState,
  term?: string,
) =>
  (mapCitiesByState[state] ?? []).filter((city) =>
    city.cityName.toLocaleLowerCase().includes(term?.toLocaleLowerCase() ?? ''),
  );

export const searchCitiesByIBGECode = (
  state: keyof MapCitiesByState,
  ibgeCode?: string,
) => {
  const arrStates = mapCitiesByState[state];
  if (!ibgeCode) return arrStates;

  return arrStates.filter((state) => state.ibgeCode.includes(ibgeCode));
};
