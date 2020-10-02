/* Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

Example:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

*/

const combinationSum = (candidates, target) => {
  const combinations = [];

  const [result, wc] = [[], []];

  const backtrack = (i, remainder) => {
    if (i >= candidates.length || remainder < 0) return;

    if (remainder === 0) return result.push(wc.slice());

    const current = candidates[i];
    wc.push(current);
    // Try using item again
    backtrack(i, remainder - current);
    wc.pop();

    // Try not using the item
    backtrack(i + 1, remainder);
  }

  backtrack(0, target);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));