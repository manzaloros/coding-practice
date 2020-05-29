//this solution works because you are always incrementing the array by 1 and checking if the sum so far is bigger than any sums you have had in the past.

function maxSequence(arr) {
  let maxSoFar = 0;
  let currMax = 0;
  for (let i = 0; i < arr.length; i++) {
    currMax = currMax + arr[i];
    if (currMax < 0) {
      currMax = 0;
    } else if (maxSoFar < currMax) {
      maxSoFar = currMax;
    }
  }
  return maxSoFar;
}

function assertEquals (actual, expected) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`failed, Expected "${expected}", but got "${actual}"`);
  }
}

let inputActual = maxSequence([ 45,
  19,
  -24,
  -10,
  0,
  24,
  -34,
  11,
  49,
  1,
  -24,
  -33,
  -9,
  -10,
  14,
  29,
  10,
  -10,
  39,
  42,
  30,
  -22,
  -4,
  -13,
  26,
  39,
  -7,
  12,
  -32,
  -41,
  38,
  22,
  -43,
  -28,
  -44,
  35,
  14,
  -9,
  -14,
  -47,
  -35,
  -21,
  15,
  -9,
  44 ]);
let inputExpected = 190;
assertEquals(inputActual, inputExpected);