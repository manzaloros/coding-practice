/**
 * @param {number} n
 * @return {number}

 n  output
 1. 1
 2. 1
 3. 2
 4. 2
 5  2
 6. 6 -> last row has a possibility of having i coins.

 5 - 1
 4 - 2
 2 - 3 = -1
 */

// Using Gauss summation formula:
// https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation
// looking for a number between 1 and n, so input is sorted:
// O(log n)
const arrangeCoins = (n) => {
  let [left, right] = [0, n];

  while (left <= right) {
    const numRows = left + Math.floor((right - left) / 2);
    const numCoinsGuess = Math.floor((numRows * numRows + 1) / 2);

    if (numCoinsGuess === n) return numRows;

    if (numCoinsGuess < n) {
      left = numRows + 1;
    } else {
      right = numRows - 1;
    }
  }

  return right;
};

// O(n)
let arrangeCoinsON = function (n) {
  for (let i = 1; i < Infinity; i += 1) {
    n -= i;

    if (n === 0) return i;
    if (n < 0) return i - 1;
  }
};
