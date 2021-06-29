/* Given an array of distinct integers nums and a target integer target, return
the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,3], target = 4 Output: 7 Explanation: The possible
combination ways are: (1, 1, 1, 1) (1, 1, 2) (1, 2, 1) (1, 3) (2, 1, 1) (2, 2)
(3, 1) Note that different sequences are counted as different combinations.
Example 2:

Input: nums = [9], target = 3 Output: 0

Constraints:

1 <= nums.length <= 200 1 <= nums[i] <= 1000 All the elements of nums are
unique.  1 <= target <= 1000

Follow up: What if negative numbers are allowed in the given array? How does it
change the problem? What limitation we need to add to the question to allow
negative numbers?

 */

const combinationSum4 = (nums, target) => {
  let result = 0;

  const temp = [];

  const backtrack = (i = 0, remain = target) => {
    if (remain === 0) {
      result += 1;
    } else if (remain > 0) {
      for (let j = i; j < nums.length; j += 1) {
        const curr = nums[j];
        temp.push(curr);
        backtrack(j, remain - curr);
        temp.pop();
      }
    }
  };

  backtrack();

  return result;
};

const combinationSum4Permutation = (nums, target) => {
  let result = 0;
  nums.sort((a, b) => (a < b ? -1 : 1));
  const smallest = nums[0];
  const lengthToSearch = Math.floor(target / smallest);

  const permute = (permutationOptions, permutationLength, remain) => {
    if (permutationLength <= 1) {
      permutationOptions.forEach((o) => {
        if (o === target) result += 1;
      });
      return permutationOptions.map((permutationOption) => [permutationOption]);
    }

    const permutations = [];

    const smallerPermutations = permute(permutationOptions, permutationLength - 1);

    permutationOptions.forEach((currentOption) => {
      smallerPermutations.forEach((smallerPermutation) => {
        const smallerSum = smallerPermutation.reduce((sum, curr) => sum + curr);

        if (currentOption + smallerSum <= target) {
          if (currentOption + smallerSum === target) result += 1;
          permutations.push([currentOption].concat(smallerPermutation));
        }
      });
    });

    return permutations;
  };

  const permutationResult = permute(nums, lengthToSearch, target);

  return result;
};

// This is the optimal solution!
const combinationSum4TopDownDP = (nums, target, memo = new Map()) => {
  if (target === 0) return 1;

  if (memo.has(target)) return memo.get(target);

  let result = 0;

  nums.forEach((num) => {
    if (target - num >= 0) result += combinationSum4TopDownDP(nums, target - num, memo);
  });

  memo.set(target, result);
  return result;
};

combinationSum4TopDownDP([1, 2, 3], 4);
