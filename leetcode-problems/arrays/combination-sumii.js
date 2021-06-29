/* eslint-disable no-continue */
/* Given a collection of candidate numbers (candidates) and a target number
(target), find all unique combinations in candidates where the candidate numbers
sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8 Output:
[
[1,1,6], [1,2,5], [1,7], [2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5 Output:
[
[1,2,2], [5]
]

Constraints:

1 <= candidates.length <= 100 1 <= candidates[i] <= 50 1 <= target <= 30
*/

// Beat 100% on LC
/*
  Time: O(2^n)
  Space: O(n) because temp requires O(n)
*/
const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => (a < b ? -1 : 1));
  const result = [];

  const temp = [];

  const backtrack = (remain, i) => {
    if (remain === 0) {
      result.push([...temp]);
    } else if (remain > 0) {
      // only continue if the item has a chance of adding to the target
      for (let j = i; j < candidates.length && candidates[j] <= target; j += 1) {
        if (i !== j && candidates[j] === candidates[j - 1]) continue;

        const curr = candidates[j];
        temp.push(curr);
        backtrack(remain - curr, j + 1);
        temp.pop();
      }
    }
  };

  backtrack(target, 0);

  return result;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
