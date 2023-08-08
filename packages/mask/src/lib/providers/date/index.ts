import { DateMaskInterface, ResponseMaskInterface } from '../../contracts';
import { generalMask } from '../../generalMask';
import { controllerPatternDate } from './controllerPatternDate';
import { orderCharInDateUnMask } from './orderCharInDateUnmask';

export const providerDate = ({
  patternDate,
  ...params
}: DateMaskInterface): ResponseMaskInterface => {
  const { mask: inputPattern, unmask: outPutPattern } = controllerPatternDate({
    patternDate,
  });

  const dateMask: ResponseMaskInterface = generalMask({
    pattern: inputPattern,
    ...params,
  });

  const unMaskFormated = orderCharInDateUnMask({
    value: dateMask.unmask,
    patternDate,
  });

  const unMaskDate = generalMask({
    pattern: outPutPattern,
    value: unMaskFormated,
    allowEmpty: params.allowEmpty,
  });

  return {
    value: dateMask.value,
    unmask: unMaskDate.value,
  };
};
