/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let canPartitionKSubsets = function (nums, k) {
  if (k === 0) return false;

  let totalSum = nums.reduce((sum, curr) => sum + curr);

  if (totalSum % k !== 0) return false;

  const partitionTargetSum = totalSum / k;

  const recurse = (index, currPartitionSum, partitionsLeft) => {
    if (partitionsLeft === 1) return true;

    if (currPartitionSum === partitionTargetSum) return recurse(0, 0, partitionsLeft - 1);

    return nums.map((num, i) => {
      if (i >= index) {
        if (num !== null) {
          nums[i] = null;

          if (recurse(i + 1, currPartitionSum + num, partitionsLeft)) return true;

          nums[i] = num;
        }
      }

      return false;
    }).reduce((a, b) => a || b);
  };

  return recurse(0, 0, k);
};

canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
// canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5], 4);
