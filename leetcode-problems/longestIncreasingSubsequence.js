/* Given an integer array nums, return the number of longest increasing subsequences.



Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.



Constraints:

0 <= nums.length <= 2000
-106 <= nums[i] <= 106 */

const findNumberOfLIS = (nums) => {
  const { length } = nums;
  const [len, cnt] = [new Array(length).fill(1), new Array(length).fill(1)];
  let lis = 1;
  for (let i = 1; i < length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) { // If next number is increasing
        if (len[j] + 1 > len[i]) {
          len[i] = len[j] + 1;
          cnt[i] = cnt[j];
        } else if (len[j] + 1 === len[i]) {
          cnt[i] += cnt[j];
        }
      }
      lis = Math.max(lis, len[i]);
    }
  }
  let ans = 0;
  for (let i = 0; i < length; i += 1) {
    if (len[i] === lis) ans += cnt[i];
  }
  return ans;
}

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));