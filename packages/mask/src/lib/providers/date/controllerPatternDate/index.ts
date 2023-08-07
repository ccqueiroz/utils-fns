import { DateMaskInterface } from '../../../contracts';

export const controllerPatternDate = ({
  patternDate,
}: Pick<DateMaskInterface, 'patternDate'>) => {
  const { mask: inputPattern, unmask: outPutPattern } = patternDate;
  const regexToMonth = new RegExp(/MMM|Mmm/g);
  const convertCharToNumber = '9';
  const convertMMMToAbv = 'WWW';
  const convertMmmToAbv = 'Wbb';
  let parseInputPatternToFormatMask = inputPattern.replace(/D|Y/g, '9');
  let parseOutputPatternToFormatMask = outPutPattern.replace(/D|Y/g, '9');
  if (!inputPattern.match(regexToMonth)) {
    parseInputPatternToFormatMask = parseInputPatternToFormatMask.replace(
      /M/g,
      convertCharToNumber,
    );
  } else {
    if (inputPattern.match(/Mmm/))
      parseInputPatternToFormatMask = parseInputPatternToFormatMask.replace(
        /Mmm/g,
        convertMmmToAbv,
      );
    else
      parseInputPatternToFormatMask = parseInputPatternToFormatMask.replace(
        /MMM/g,
        convertMMMToAbv,
      );
  }

  if (!outPutPattern.match(regexToMonth)) {
    parseOutputPatternToFormatMask = parseOutputPatternToFormatMask.replace(
      /M/g,
      convertCharToNumber,
    );
  } else {
    if (outPutPattern.match(/Mmm/))
      parseOutputPatternToFormatMask = parseOutputPatternToFormatMask.replace(
        /Mmm/g,
        convertMmmToAbv,
      );
    else
      parseOutputPatternToFormatMask = parseOutputPatternToFormatMask.replace(
        /MMM/g,
        convertMMMToAbv,
      );
  }

  return {
    mask: parseInputPatternToFormatMask,
    unmask: parseOutputPatternToFormatMask,
  };
};
