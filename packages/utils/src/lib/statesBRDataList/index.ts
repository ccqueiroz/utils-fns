import { CountriesBRDataList } from '../contracts/index';
import dataJson from './data.json';

export const mapState: Array<CountriesBRDataList> = dataJson;

export const searchCountriesByAbbreviation = (term?: string) =>
  mapState.filter((state) =>
    state.abbreviation
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );

export const searchCountryByName = (term?: string) =>
  mapState.filter((state) =>
    state.stateName
      .toLocaleLowerCase()
      .includes(term?.toLocaleLowerCase() ?? ''),
  );
