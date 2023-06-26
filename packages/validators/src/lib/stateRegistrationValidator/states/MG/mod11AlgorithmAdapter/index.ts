type Mod11AlgorithmAdapter = {
  digits: Array<string>;
};

export const mod11AlgorithmAdapter = ({ digits }: Mod11AlgorithmAdapter) => {
  let multiplier = 2;
  const reducerByModule11 = digits.reduce(
    (accumulator: string | number, currenValue: string | number) => {
      const result = Number(currenValue) * multiplier;
      multiplier = multiplier === 11 ? 2 : ++multiplier;
      return Number(accumulator) + result;
    },
    0,
  );

  return 11 - (reducerByModule11 % 11);
};
