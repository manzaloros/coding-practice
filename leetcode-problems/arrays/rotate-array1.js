/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.

 1 2 3 4, 1 ->  4 1 2 3

 r(1, 0)
 i = 1
 j = 0
 i
 1
 then, reverse whole list.
 reversed from 0 to k - 1 and k to length - 1.

 */
let rotate = function (nums, k) {
  k %= nums.length;

  const reverse = (i, j) => {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
      j -= 1;
    }
  };

  reverse(0, nums.length - 1);

  reverse(0, k - 1);
  reverse(k, nums.length - 1);

  return nums;
};
