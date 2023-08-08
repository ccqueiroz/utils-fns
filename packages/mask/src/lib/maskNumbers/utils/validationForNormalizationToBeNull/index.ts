import { ValidationForNormalizationToBeNullType } from '../../../contracts';

export const validationForNormalizationToBeNull = ({
  value,
  previousValue,
  digits,
}: ValidationForNormalizationToBeNullType) => {
  const zeroValuesCaptureRegex = /(\b0{1,})(,){0,}(\b0{1,})(?![1-9])/g;
  return Boolean(
    digits === '' ||
      (previousValue?.toString()?.match(zeroValuesCaptureRegex) &&
        value?.toString()?.match(zeroValuesCaptureRegex)),
  );
};
