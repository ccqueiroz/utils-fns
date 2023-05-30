export const luhnAlgorithm = (value: string | Array<string | number>) => {
  if (!value.length || (Array.isArray(value) && value.every((item) => !item)))
    return null;
  if (typeof value === 'string') value = value.split('');

  value = value
    .map((item) => item.toString().replace(/\D/g, ''))
    .filter(Boolean)
    .reverse();
  if (value.every((item) => !item)) return null;
  const result = value.reduce(callbackReducerLunhAlgorithm, 0);
  return +result;
};

const callbackReducerLunhAlgorithm = (
  accumulator: string | number,
  currentValue: string | number,
  currentIndex: number,
) => {
  if (currentIndex % 2 === 0) {
    return Number(accumulator) + Number(currentValue);
  }
  const multiplyBy2 = Number(currentValue) * 2;
  const sum =
    multiplyBy2 > 9
      ? Number(multiplyBy2.toString()[0]) + Number(multiplyBy2.toString()[1])
      : multiplyBy2;
  return Number(accumulator) + sum;
};
