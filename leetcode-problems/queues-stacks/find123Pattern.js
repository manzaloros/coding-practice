/* Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?



Example 1:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
Example 2:

Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].


Constraints:

n == nums.length
1 <= n <= 104
-109 <= nums[i] <= 109 */

const find132pattern = (nums) => {
  const [{ length }, minVals] = [nums, [nums[0]]];
  if (!length) return false;
  /* *
  Create min value array that as indexes increase,
  The current minimum from nums is tracked
  So if the first number of nums is the lowest number in nums,
  min values will be just that number repeated length times.
   */
  for (let i = 1; i < length; i += 1) {
    minVals[i] = Math.min(minVals[i - 1], nums[i]);
  }

  /**
   * Stack will hold previous minimum values. We will iterate backwards through nums
   * We pop off the stack if the current value is less than or equal to the top
   * But if we find that the top of the stack is less than the current nums value,
   * We know that our current minimum is tracked in the minVals array and that
   * if the current nums value is greater than the top of the stack, we found a 132 pattern.
   * Why do we use a stack? We need the last in first out push and pop.
   *  */
  const stack = [];
  for (let i = length - 1; i > 0; i -= 1) {
    const [minVal, current] = [
      minVals[i - 1],
      nums[i],
    ];
    while (stack.length > 0 && stack[stack.length - 1] <= minVal) {
      stack.pop();
    }
    if (stack.length > 0 && stack[stack.length - 1] < current) return true;
    stack.push(current);
  }
  return false;
}

console.log(find132pattern([-1, 3, 2, 0])) // true
