import { utils } from '../../src/index';
import dataJsonStates from '../../src/lib/statesBRDataList/data.json';

describe('[UTILS: SearchCitiesByTerm]', () => {
  it('Should be return array with all states when this function is called without term param.', () => {
    expect(utils.searchCountriesByAbbreviation().length).toEqual(
      dataJsonStates.length,
    );
  });
  it('Should be return array with no elements when this function is called with non-existent term param.', () => {
    expect(utils.searchCountriesByAbbreviation('ABC').length).toEqual(0);
  });
  it('Should be return array with 1 elements when this function is called with "CE" term param.', () => {
    expect(utils.searchCountriesByAbbreviation('CE')[0].stateName).toEqual(
      'Ceará',
    );
    expect(utils.searchCountriesByAbbreviation('CE')[0].capital).toEqual(
      'Fortaleza',
    );
  });
});
