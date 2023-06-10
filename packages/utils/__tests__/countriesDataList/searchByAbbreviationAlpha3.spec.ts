import { utils } from '../../src/index';
import dataJsonCountries from '../../src/lib/countriesDataList/data.json';

describe('[UTILS: SEARCH_ABREVVIATION_ALPHA3]', () => {
  it('Should be return array with all countries when this function is called without term param.', () => {
    expect(utils.searchByAbbreviationAlpha3().length).toEqual(
      dataJsonCountries.length,
    );
  });
  it('Should be return array with no elements when this function is called with non-existent term param.', () => {
    expect(utils.searchByAbbreviationAlpha3('ABC').length).toEqual(0);
  });
  it('Should be return array with 1 elements when this function is called with "ALB" term param.', () => {
    expect(utils.searchByAbbreviationAlpha3('ALB').length).toEqual(1);
    expect(utils.searchByAbbreviationAlpha3('ALB')[0].countryName).toEqual(
      'Albania',
    );
  });
});
