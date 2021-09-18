/**
 * @param {string[]} nums
 * @return {string}
 */
let findDifferentBinaryString = function (nums) {
  // num of possibilities for binary num is 2 ** num of bits
  nums = nums.map((num) => parseInt(num, 2)).sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0, ans = 0; i < (2 ** nums.length); i += 1, ans += 1) {
    if (nums[i] !== ans) return ans.toString(2).padStart(nums.length, '0');
  }
};
