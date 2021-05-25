/* Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only
the integer part of the result is returned.

Example 1:

Input: x = 4 Output: 2 Example 2:

Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and
since the decimal part is truncated, 2 is returned.

Constraints:

0 <= x <= 231 - 1 */
/*
  TC: O (log n)
*/
const mySqrt = (x) => {
  if (x < 2) return x;

  let left = 2;
  let right = x / 2;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const root = mid * mid;

    if (root < x) {
      left = mid + 1;
    } else if (root > x) {
      right = mid - 1;
    } else return mid;
  }

  return Math.trunc(right);
};

console.log(mySqrt(5));
