// O(n^3)
// Space: O(n) for recursion stack
// Also works for 3 sum
const fourSumTwoPointers = (nums, target) => {
  nums.sort((a, b) => (a < b ? -1 : 1));

  const result = [];
  const temp = [];

  const kSum = (targetSum, k, index) => {
    // Two-sum with 2 pointers. O(n)
    if (k === 2) {
      let [left, right] = [index, nums.length - 1];

      while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum > targetSum) {
          right -= 1;
        } else if (sum < targetSum) {
          left += 1;
        } else {
          temp.push(nums[left], nums[right]);

          result.push([...temp]);

          temp.pop();
          temp.pop();

          left += 1;

          while (left < right && nums[left - 1] === nums[left]) left += 1; // avoid duplicates
        }
      }
    } else {
      // For k === 4, recursion happens twice before k === 2, so O(n^2)
      nums.forEach((num, i) => {
        // always start i at the index
        if (i >= index) {
          // Don't consider a number if it's the same as the previous number since
          // array is sorted
          if (i === index || nums[i - 1] !== num) {
            temp.push(nums[i]);
            kSum(targetSum - nums[i], k - 1, i + 1);

            temp.pop();
          }
        }
      });
    }
  };

  kSum(target, 4, 0);

  return result;
};

fourSumTwoPointers([2, 2, 2, 2, 2], 8);
// fourSumTwoPointers(
//   [1, 0, -1, 0, -2, 2],
//   0,
// );
