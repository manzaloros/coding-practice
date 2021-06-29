/* Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique. */

// Returns unique results of EVERY (any) length, including 0, an empty list!
const subsets = (nums) => {
  // works without the sort:
  // nums.sort((a, b) => (a < b ? -1 : 1));
  const result = [];
  const temp = [];

  const backtrack = (i) => {
    result.push([...temp]);

    for (let j = i; j < nums.length; j += 1) {
      // works without this if:
      // if (nums[j] !== nums[j - 1]) {
      temp.push(nums[j]);
      backtrack(j + 1);
      temp.pop();
      // }
    }
  };

  backtrack(0);

  return result;
};

subsets([1, 2, 3]);
