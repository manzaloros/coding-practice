/* Given an array of distinct integers candidates and a target integer target,
return a list of all unique combinations of candidates where the chosen numbers
sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two
combinations are unique if the frequency of at least one of the chosen numbers
is different.

It is guaranteed that the number of unique combinations that sum up to target is
less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7 Output: [[2,2,3],[7]] Explanation: 2
and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.  These are the only two combinations.  Example 2:

Input: candidates = [2,3,5], target = 8 Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1 Output: [] Example 4:

Input: candidates = [1], target = 1 Output: [[1]] Example 5:

Input: candidates = [1], target = 2 Output: [[1,1]]

Constraints:

1 <= candidates.length <= 30 1 <= candidates[i] <= 200 All elements of
candidates are distinct.  1 <= target <= 500
*/

// This solution sucks:
const combinationSum = (candidates, target) => {
  candidates.sort((a, b) => (a < b ? -1 : 1));

  const size = Math.floor(target / candidates[0]);

  const result = [];
  const alreadyAdded = new Set();

  const combine = (options = candidates, k = size) => {
    if (k <= 1) {
      const arr = [];
      for (let i = 0; i < options.length; i += 1) {
        const option = options[i];
        if (!alreadyAdded.has(option) && option === target) {
          result.push([option]);
          alreadyAdded.add(option);
        }
        arr.push([options[i]]);
      }
      return arr;
    }
    const temp = [];

    options.forEach((current, i) => {
      const smallerCombos = combine(options.slice(i), k - 1);
      smallerCombos.forEach((combo) => {
        const merged = [current].concat(combo);

        if (!alreadyAdded.has(combo[0]) && combo.length === 1 && combo[0] === target) {
          result.push(combo);
          alreadyAdded.add(combo[0]);
        }

        const numString = merged.reduce((str, curr) => String(curr) + str, '');

        if (merged.reduce((sum, curr) => sum + curr) === target
          && !alreadyAdded.has(numString)) {
          result.push(merged);
          alreadyAdded.add(numString);
        }

        temp.push(merged);
      });
    });

    return temp;
  };

  combine();

  return result;
};

// Uses subset allowing repetition algo
const combinationSumBacktrack = (candidates, target) => {
  const result = [];

  const temp = [];

  const backtrack = (remain, i) => {
    if (remain === 0) {
      result.push([...temp]);
      // only continue if remaining has a chance of hitting target
    } else if (remain > 0) {
      for (let j = i; j < candidates.length; j += 1) {
        const curr = candidates[j];

        temp.push(curr);
        // recursing on j rather than j + 1 will allow for trying duplicated
        // numbers like [2,2,2,...] until they reach or exceed the target. So,
        // it uses a small tweak from subsets. Passing down the running sum
        // (remaining - curr) of the current combination to see if it adds to
        // the target.
        backtrack(remain - curr, j);
        temp.pop();
      }
    }
  };

  backtrack(target, 0);

  return result;
};

combinationSumBacktrack([2, 3, 6, 7], 7);
