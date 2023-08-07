/* eslint-disable no-useless-escape */
import { DateMaskInterface } from '../../../contracts';

type OrderCharInDateUnMaskType = Pick<
  DateMaskInterface,
  'value' | 'patternDate'
>;
export const orderCharInDateUnMask = ({
  value,
  patternDate,
}: OrderCharInDateUnMaskType) => {
  const { mask: inputPattern, unmask: outPutPattern } = patternDate;

  if (!value) return '';

  let daysBlock = '';
  let monthsBlock = '';
  let yearsBlock = '';
  let dateFormat = '';

  if (outPutPattern !== inputPattern) {
    if (outPutPattern.match(/^(YYYY)/g) && inputPattern.match(/^(DD)/g)) {
      const initialPositionYear = inputPattern.match(/(\/|\-)(MM)(\/|\-)/g)
        ? 4
        : 5;

      daysBlock = value.toString().slice(0, 2);
      monthsBlock = value.toString().slice(2, initialPositionYear);
      yearsBlock = value
        .toString()
        .slice(initialPositionYear, value.toString().length);
    } else if (
      outPutPattern.match(/^(YYYY)/g) &&
      inputPattern.match(/^(M){1,3}/gi)
    ) {
      const initialPositionYear = inputPattern.match(/^(MM)(\/|\-)/g) ? 2 : 3;
      daysBlock = value
        .toString()
        .slice(initialPositionYear, initialPositionYear + 2);
      monthsBlock = value.toString().slice(0, initialPositionYear);
      yearsBlock = value
        .toString()
        .slice(initialPositionYear + 2, value.toString().length);
    } else if (
      outPutPattern.match(/^(DD)/g) &&
      inputPattern.match(/^(YYYY)/g)
    ) {
      const initialPositionYear = inputPattern.match(/(\/|\-)(MM)(\/|\-)/g)
        ? 6
        : 7;
      daysBlock = value
        .toString()
        .slice(initialPositionYear, value.toString().length);
      monthsBlock = value.toString().slice(4, initialPositionYear);
      yearsBlock = value.toString().slice(0, 4);
    } else if (
      outPutPattern.match(/^(DD)/g) &&
      inputPattern.match(/^(M){1,3}/gi)
    ) {
      const initialPositionYear = inputPattern.match(/^(MM)(\/|\-)/g) ? 2 : 3;
      daysBlock = value
        .toString()
        .slice(initialPositionYear, initialPositionYear + 2);
      monthsBlock = value.toString().slice(0, initialPositionYear);
      yearsBlock = value
        .toString()
        .slice(initialPositionYear + 2, value.toString().length);
    }
    dateFormat = outPutPattern
      .replace(/\W/g, '')
      .replace(/YYYY/g, yearsBlock)
      .replace(/DD/g, daysBlock)
      .replace(/M{2,3}|Mmm/g, monthsBlock);
  } else {
    dateFormat = value.toString();
  }

  return dateFormat;
};
