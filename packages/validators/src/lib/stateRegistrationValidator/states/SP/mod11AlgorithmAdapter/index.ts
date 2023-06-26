type Mod11AlgorithmAdapter = {
  digits: Array<string>;
  validationRuralStateRegistration: boolean;
};

export const mod11AlgorithmAdapter = ({
  digits,
  validationRuralStateRegistration,
}: Mod11AlgorithmAdapter) => {
  if (validationRuralStateRegistration) {
    let multiplier = 2;
    const reducerByModule11 = digits.reduce(
      (accumulator: string | number, currenValue: string | number) => {
        const result = Number(currenValue) * multiplier;
        multiplier = multiplier === 10 ? 2 : ++multiplier;
        return Number(accumulator) + result;
      },
      0,
    );

    return reducerByModule11 % 11;
  } else {
    let multiplier = 1;

    const reducerByModule11 = digits.reduce(
      (accumulator: string | number, currenValue: string | number) => {
        multiplier =
          multiplier === 2 || multiplier === 9 ? ++multiplier : multiplier;
        const result = Number(currenValue) * multiplier;
        multiplier = multiplier === 10 ? 1 : ++multiplier;
        return Number(accumulator) + result;
      },
      0,
    );

    return reducerByModule11 % 11;
  }
};
