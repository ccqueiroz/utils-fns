import { EventHandleAdapter } from '../EventHandleAdapter';

export type LocalesType =
  | 'af'
  | 'ar-DZ'
  | 'ar-EG'
  | 'ar-MA'
  | 'ar-SA'
  | 'ar-TN'
  | 'ar'
  | 'az'
  | 'be-tarask'
  | 'be'
  | 'bg'
  | 'bn'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de-AT'
  | 'de'
  | 'el'
  | 'en-AU'
  | 'en-CA'
  | 'en-GB'
  | 'en-IE'
  | 'en-IN'
  | 'en-NZ'
  | 'en-US'
  | 'en-ZA'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa-IR'
  | 'fi'
  | 'fr-CA'
  | 'fr-CH'
  | 'fr'
  | 'fy'
  | 'gd'
  | 'gl'
  | 'gu'
  | 'he'
  | 'hi'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'id'
  | 'is'
  | 'it-CH'
  | 'it'
  | 'ja-Hira'
  | 'ja'
  | 'ka'
  | 'kk'
  | 'km'
  | 'kn'
  | 'ko'
  | 'lb'
  | 'lt'
  | 'lv'
  | 'mk'
  | 'mn'
  | 'ms'
  | 'mt'
  | 'nb'
  | 'nl-BE'
  | 'nl'
  | 'nn'
  | 'oc'
  | 'pl'
  | 'pt-BR'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sq'
  | 'sr-Latn'
  | 'sr'
  | 'sv'
  | 'ta'
  | 'te'
  | 'th'
  | 'tr'
  | 'ug'
  | 'uk'
  | 'uz-Cyrl'
  | 'uz'
  | 'vi'
  | 'zh-CN'
  | 'zh-HK'
  | 'zh-TW';

export interface MaskNumbersInterface {
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  allowNegative?: boolean;
  value: string | number | null;
  locale?: LocalesType;
  numberWithoutPonctuation?: boolean;
  previousValue?: string | number | null;
  event?: EventHandleAdapter;
}

export type NormalizeNumberValueType = Pick<
  MaskNumbersInterface,
  'value' | 'previousValue' | 'allowNegative' | 'prefix' | 'suffix'
> & {
  decimalPlaces: number;
};

export type ValidationForNormalizationToBeNullType = Pick<
  MaskNumbersInterface,
  'value' | 'previousValue'
> & {
  digits: string;
};

export type FormatNumberValueType = Pick<
  MaskNumbersInterface,
  | 'value'
  | 'allowNegative'
  | 'prefix'
  | 'suffix'
  | 'numberWithoutPonctuation'
  | 'locale'
> & {
  decimalPlaces: number;
};
