/* eslint-disable prettier/prettier */

export type CitiesBRDataList = {
  ibgeCode: string;
  cityName: string;
  state: string;
};

export type MapCitiesByState = {
  [key in
  | 'AC'
  | 'AL'
  | 'AP'
  | 'AM'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | 'GO'
  | 'MA'
  | 'MT'
  | 'MS'
  | 'MG'
  | 'PA'
  | 'PB'
  | 'PR'
  | 'PE'
  | 'PI'
  | 'RJ'
  | 'RN'
  | 'RS'
  | 'RO'
  | 'RR'
  | 'SC'
  | 'SP'
  | 'SE'
  | 'TO']: Array<CitiesBRDataList>;
};
