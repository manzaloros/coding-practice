/*
  Algorithm:
  Make a hard coded map of 1, 5, 10, 50, 100, 500, 1000.

  inst total to be 0
  Iterate through the roman numeral
    if the current num is less than the next num, add (next - curr) to the total
    else, add the curr num total

  return total

*/
const romanToInt = (roman) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;

  for (let i = 0; i < roman.length; i += 1) {
    const num = map[roman[i]];

    if (i === roman.length - 1) {
      int += num;
    } else {
      const next = map[roman[i + 1]];

      if (num < next) {
        int += (next - num);
        i += 1;
      } else {
        int += num;
      }
    }
  }

  return int;
};
