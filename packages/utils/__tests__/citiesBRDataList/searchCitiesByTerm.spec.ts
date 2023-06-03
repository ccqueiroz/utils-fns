import { utils } from '../../src/index';
import dataJsonCities from '../../src/lib/citiesBRDataList/data.json';

describe('[UTILS: SEARCH_CITIES_BY_TERM]', () => {
  it('Should be return array with all cities in the state when this function is called without term param.', () => {
    expect(utils.searchCitiesByTerm('CE').length).toEqual(
      dataJsonCities['CE'].length,
    );
  });
  it('Should be return array with no elements when this function is called with non-existent term param.', () => {
    expect(utils.searchCitiesByTerm('CE', 'foo-bar').length).toEqual(0);
  });
  it('Should be return array with 3 elements when this function is called with "Fort" term param.', () => {
    expect(utils.searchCitiesByTerm('CE', 'Fort').length).toEqual(3);
  });
  it('Should be return array with 1 elements when this function is called with "Fortaleza" term param.', () => {
    expect(utils.searchCitiesByTerm('CE', 'Fortaleza')[0].cityName).toEqual(
      'Fortaleza',
    );
  });
});
