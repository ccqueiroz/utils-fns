import { EventHandleAdapter } from '../EventHandleAdapter';

export interface GeneralMaskInterface {
  pattern: string;
  value: string | number | null;
  previousValue?: string | number | null;
  allowEmpty?: boolean;
  event?: EventHandleAdapter;
}

export interface MaskInterface {
  regExp: RegExp;
  transform?: (char: string) => string;
}

export interface MasksInterface {
  A: MaskInterface;
  a: MaskInterface;
  b: MaskInterface;
  U: MaskInterface;
  W: MaskInterface;
  9: MaskInterface;
}

export type NormalizeValueType = Pick<
  GeneralMaskInterface,
  'value' | 'previousValue' | 'pattern' | 'allowEmpty'
> & {
  maskDefinitions: MasksInterface;
  removedPattern: string;
};

export type ReformatInputType = Pick<
  GeneralMaskInterface,
  'value' | 'pattern' | 'allowEmpty'
> & {
  maskDefinitions: MasksInterface;
};

export type ApplyMaskType = Pick<
  GeneralMaskInterface,
  'value' | 'pattern' | 'allowEmpty'
> & {
  maskDefinitions: MasksInterface;
};

export type ApplyTransformType = Pick<
  GeneralMaskInterface,
  'value' | 'previousValue' | 'pattern'
> & {
  maskDefinitions: MasksInterface;
};

export type FormatValueType = Pick<
  GeneralMaskInterface,
  'value' | 'pattern' | 'allowEmpty'
> & {
  maskDefinitions: MasksInterface;
};

export type FirstUnfilledPositionType = Pick<
  GeneralMaskInterface,
  'value' | 'pattern' | 'allowEmpty'
> & {
  maskDefinitions: MasksInterface;
};

export type TargetType = EventTarget & HTMLInputElement;
