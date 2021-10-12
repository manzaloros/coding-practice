/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const magicNum = 6;

const guess = (num) => {
  if (num > magicNum) return -1;
  if (num < magicNum) return 1;

  return 0;
};

let guessNumber = (n) => {
  let [lo, hi] = [1, n];

  while (lo <= hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;
    const myGuess = guess(mid);

    if (myGuess === 0) return mid;

    if (myGuess === -1) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
};

guessNumber(10);
