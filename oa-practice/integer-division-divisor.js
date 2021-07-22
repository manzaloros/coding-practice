/* You're given an array, and you can update elements in that array by
performing integer division with divisor d. What is the minimum number of
divisions needed so that there are T numbers that are the same in the array.

E.g. [1,2,3,4,5], threshold T = 3, d = 2. We want the min number of divisions
needed so that 3 numbers are the same in the array. The answer is 2. We can
divide 2 // 2 = 1 and 3 // 2 = 1 to get 3 1's with 2 operations, or 4 // 2 = 2
and 5 // 2 = 2 to get 3 2's.

Another example is [16, 32, 64], T = 3, d = 2, answer is 3. 32 // 2 = 16, and 64
// 2 = 32, then 32 // 2 = 16, 3 divisions needed. */

// input: arr of nums and int divisor, t num
// output: num rep. min number of divisions so that there are t numbers that are
// the same

const minDivisions = (arr, d, t) => {
  // Track how many divisions it takes to get a particular quotient. quotient:
  // [number of divisions it has taken to get here from dividing any of the
  // numbers by d]
  const quotients = new Map();

  const process = (num) => {
    let currentNumberOfDivisions = 0;

    while (num > 0) {
      const numberOfDivisions = quotients.get(num) ? quotients.get(num) : [];
      numberOfDivisions.push(currentNumberOfDivisions);
      quotients.set(num, numberOfDivisions);
      num = Math.trunc(num / d);

      currentNumberOfDivisions += 1;
    }
  };

  arr.forEach((num) => process(num));

  let min = Infinity;

  quotients.forEach((numberOfDivisions) => {
    // only look at a quotient if there have been t or more divisions to get there
    if (numberOfDivisions.length >= t) {
      // not sure we need to sort
      // numberOfDivisions.sort((a, b) => (a < b ? -1 : 1));
      // add up number of times it took to get to this current quotient
      let total = 0;
      for (let i = 0; i < t; i += 1) total += numberOfDivisions[i];

      min = Math.min(min, total);
    }
  });

  return min;
};

minDivisions([1, 2, 3, 4, 5], 2, 3);
// What's the minimum number of times you can divide any of these numbers by 2
// so that 3 of them will be the same number?
// minDivisions([16, 32, 64], 2, 3);
// minDivisions([1, 2, 10000000], 2, 2);
