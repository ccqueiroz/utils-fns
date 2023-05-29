import { utils } from '../../src/index';
import dataJsonCities from '../../src/lib/citiesBRDataList/data.json';

describe('[UTILS: GetCitiesListByState]', () => {
  it('Should be return array with all cities in the state when this function is called without ibgeCode param.', () => {
    expect(utils.getCitiesListByState('CE').length).toEqual(
      dataJsonCities['CE'].length,
    );
  });
});
