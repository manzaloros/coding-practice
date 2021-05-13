/* Given an integer n, return the number of trailing zeroes in n!.

Follow up: Could you write a solution that works in logarithmic time complexity?

Example 1:

Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Example 3:

Input: n = 0
Output: 0

Constraints:

0 <= n <= 104 */

// Counting factors of 5
/*
  TC: O(n)
  You count factors of 5 without actually calculating the factorial. Why?
  Because 5 * 2 is 10, which is what will actually add the zero to the end of
  the number
*/
const trailingZeroes = (n) => {
  let fives = 0;

  for (let i = 5; i <= n; i += 5) {
    let remainingI = i;

    // calculate how many factors of 5 are in the current i
    while (remainingI % 5 === 0) {
      fives += 1;
      remainingI /= 5;
    }
  }

  return fives;
};

// Needs understanding:
const trailingZeroesOptimized = (n) => {
  let fives = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    fives += n;
  }

  return fives;
};

console.log(trailingZeroesOptimized(30)); // 7
