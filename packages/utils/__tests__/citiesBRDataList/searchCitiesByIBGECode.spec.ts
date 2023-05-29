import { utils } from '../../src/index';
import dataJsonCities from '../../src/lib/citiesBRDataList/data.json';

describe('[UTILS: SearchCitiesByIBGECode]', () => {
  it('Should be return array with all cities in the state when this function is called without ibgeCode param.', () => {
    expect(utils.searchCitiesByIBGECode('CE').length).toEqual(
      dataJsonCities['CE'].length,
    );
  });
  it('Should be return array with no elements when this function is called with non-existent ibgeCode param.', () => {
    expect(utils.searchCitiesByIBGECode('AC', '12122332132').length).toEqual(0);
  });
  it('Should be return array with 3 elements when this function is called with "Fort" term param.', () => {
    expect(utils.searchCitiesByIBGECode('AC', '12000').length).toEqual(2);
  });
  it('Should be return array with 1 elements when this function is called with "1200138" term param.', () => {
    expect(utils.searchCitiesByIBGECode('AC', '1200138').length).toEqual(1);
    expect(utils.searchCitiesByIBGECode('AC', '1200138')[0].ibgeCode).toEqual(
      '1200138',
    );
    expect(utils.searchCitiesByIBGECode('AC', '1200138')[0].cityName).toEqual(
      'Bujari',
    );
  });
});
