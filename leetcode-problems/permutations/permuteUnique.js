/* Given a collection of numbers, nums, that might contain duplicates, return
all possible unique permutations in any order.

Example 1:

Input: nums = [1,1,2] Output: [[1,1,2], [1,2,1], [2,1,1]] Example 2:

Input: nums = [1,2,3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Constraints:

1 <= nums.length <= 8 -10 <= nums[i] <= 10 */

const permuteUnique = (nums) => {
  const results = [];
  const memo = new Set();

  nums.forEach((n, i) => {
    if (!memo.has(n)) {
      memo.add(n);

      const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
      const further = permuteUnique(rest);

      if (!further.length) results.push([n]);

      further.forEach((p) => {
        results.push([n, ...p]);
      });
    }
  });

  return results;
};

permuteUnique([1, 2, 3]);
