/* eslint-disable no-bitwise */
/* Non-negative Integers without Consecutive Ones Given a positive integer n,
return the number of the integers in the range [0, n] whose binary
representations do not contain consecutive ones.

Example 1:

Input: n = 5 Output: 5 Explanation: Here are the non-negative integers <= 5 with
their corresponding binary representations: 0 : 0 1 : 1 2 : 10 3 : 11 4 : 100 5
: 101 Among them, only integer 3 disobeys the rule (two consecutive ones) and
the other 5 satisfy the rule.  Example 2:

Input: n = 1 Output: 2 Example 3:

Input: n = 2 Output: 3

Constraints:

1 <= n <= 109 */

// output: number rep. the number of integers between 0 and n that don't contain
// consecutive ones

// Brute force, doesn't work for me so far?
const findIntegers = (n) => {
  const check = (num) => {
    let i = 31;

    while (i > 0) {
      if ((n & (1 << i)) !== 0 && (n & (1 << (i - 1))) !== 0) return false;

      i -= 1;
    }

    return true;
  };

  let count = 0;

  for (let i = 0; i < n; i += 1) {
    if (check(i)) count += 1;
  }

  return count;
};

// Does pass time limit:
const findIntegersBetterBrute = (n, i = 0, sum = 0, prev = false) => {
  if (sum > n) return 0;

  if ((1 << i) > n) return 1;

  if (prev) return findIntegers(n, i + 1, sum, false);

  return findIntegers(n, i + 1, sum, false) + findIntegers(n, i + 1, sum + (1 << i), true);
};
