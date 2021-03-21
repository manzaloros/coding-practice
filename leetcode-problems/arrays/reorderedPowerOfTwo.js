/*   Reordered Power of 2
Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

Example 1:

Input: 1
Output: true
Example 2:

Input: 10
Output: false
Example 3:

Input: 16
Output: true
Example 4:

Input: 24
Output: false
Example 5:

Input: 46
Output: true

Note:

1 <= N <= 10^9
*/

const isPowerOf2 = (num) => (Math.log(num) / Math.log(2)) % 1 === 0;

const reorderedPowerOf2 = (N) => {
  const res = N.toString().split('').sort().join('');
  for (let i = 0; i < 30; i++) {
    if ((1 << i).toString().split('').sort().join('') === res) return true;
  }
  return false;
};
reorderedPowerOf2(10);
reorderedPowerOf2(679213508);
