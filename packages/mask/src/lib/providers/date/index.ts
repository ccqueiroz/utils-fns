import {
  DateMaskInterface,
  ResponseGeneralMaskInterface,
} from '../../contracts';
import { generalMask } from '../../generalMask';

export const providerDate = ({
  patternDate,
  ...params
}: DateMaskInterface): ResponseGeneralMaskInterface => {
  const { mask: inputPattern, unmask: outPutPattern } = patternDate;

  const dateMask: ResponseGeneralMaskInterface = generalMask({
    pattern: inputPattern,
    ...params,
  });

  const unMaskDate: string = generalMask({
    pattern: outPutPattern,
    value: dateMask.unmask,
    allowEmpty: params.allowEmpty,
  }).value;

  return {
    value: dateMask.value,
    unmask: unMaskDate,
  };
};
