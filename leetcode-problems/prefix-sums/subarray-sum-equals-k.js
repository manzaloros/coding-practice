/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum = function (nums, k) {
  const freq = new Map();
  freq.set(0, 1);
  let count = 0;

  let sum = 0;

  nums.forEach((num) => {
    sum += num;
    const kLessSum = freq.get(sum - k);
    if (kLessSum) count += kLessSum;

    freq.set(sum, (freq.get(sum) || 0) + 1);
  });

  return count;
};
