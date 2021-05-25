/* Given a positive integer num, write a function which returns True if num is a
perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

Example 1:

Input: num = 16 Output: true Example 2:

Input: num = 14 Output: false

Constraints:

1 <= num <= 2^31 - 1 */

const isPerfectSquare = (num) => {
  let left = 0;
  let right = Math.floor(num / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squared = mid * mid;

    if (squared === num) return true;

    if (squared < num) left = mid + 1;
    if (squared > num) right = mid - 1;
  }

  return false;
};

console.log(isPerfectSquare(5));
