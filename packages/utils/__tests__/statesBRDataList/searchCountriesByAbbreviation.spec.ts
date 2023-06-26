import { utils } from '../../src/index';
import dataJsonStates from '../../src/lib/statesBRDataList/data.json';

describe('[UTILS: SEARCH_STATES_BY_TERM]', () => {
  it('Should be return array with all states when this function is called without term param.', () => {
    expect(utils.searchCitiesByStateAbbreviation().length).toEqual(
      dataJsonStates.length,
    );
  });
  it('Should be return array with no elements when this function is called with non-existent term param.', () => {
    expect(utils.searchCitiesByStateAbbreviation('ABC').length).toEqual(0);
  });
  it('Should be return array with 1 elements when this function is called with "CE" term param.', () => {
    expect(utils.searchCitiesByStateAbbreviation('CE')[0].stateName).toEqual(
      'Ceará',
    );
    expect(utils.searchCitiesByStateAbbreviation('CE')[0].capital).toEqual(
      'Fortaleza',
    );
  });
});
