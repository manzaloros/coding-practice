/*
Given an array of intervals intervals where intervals[i] = [starti, endi],
return the minimum number of intervals you need to remove to make the rest of
the intervals non-overlapping.

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]] Output: 1 Explanation: [1,3] can be
removed and the rest of the intervals are non-overlapping.  Example 2:

Input: intervals = [[1,2],[1,2],[1,2]] Output: 2 Explanation: You need to remove
two [1,2] to make the rest of the intervals non-overlapping.  Example 3:

Input: intervals = [[1,2],[2,3]] Output: 0 Explanation: You don't need to remove
any of the intervals since they're already non-overlapping.

Constraints:

1 <= intervals.length <= 2 * 104 intervals[i].length == 2 -2 * 104 <= starti <
endi <= 2 * 104
*/
/*
  TC: O(n log n)
  SC: O(1)
*/
const eraseOverlapIntervals = (intervals, { length } = intervals) => {
  // Sort by endings
  intervals.sort((a, b) => a[1] - b[1]);
  let total = 0;
  let end = intervals[0][1];

  for (let i = 1; i < length; i += 1) {
    const current = intervals[i];

    // If the current interval is encompassed by the previous end
    if (end > current[0]) {
      total += 1;
    } else {
      // Otherwise, make the new end the current interval's end
      end = current[1];
    }
  }

  return total;
};

const eraseOverlapIntervalsTopDown = (intervals) => {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const { length } = intervals;

  const backtrack = (index, start) => {
    // If you're on the first index, you don't need to remove any intervals.
    if (index === 0) return 0;

    // Tracks intervals you have chosen to remove
    let result = 0;

    if (start >= intervals[index - 1][1]) {
      result = backtrack(index - 1, intervals[index - 1][0]);
    } else {
      result = Math.min(backtrack(index - 1, start),
        backtrack(index - 1, intervals[index - 1][0])) + 1;
    }

    return result;
  };

  return backtrack(length - 1, intervals[length - 1][1]);
};

const eraseOverlapIntervalsTopDownBetter = (intervals) => {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const { length } = intervals;
  const memo = new Map();

  const backtrack = (prev, curr) => {
    if (curr === length) return 0;

    const key = `${prev}:${curr}`;
    if (memo.has(key)) return memo.get(key);

    let take = Infinity;
    let notTake = 0;

    if (prev === -1 || intervals[prev][1] <= intervals[curr][0]) take = backtrack(curr, curr + 1);

    notTake = backtrack(prev, curr + 1) + 1;

    const winner = Math.min(take, notTake);
    memo.set(key, winner);

    return winner;
  };

  return backtrack(-1, 0);
};

console.log(eraseOverlapIntervalsTopDown([[1, 2], [2, 3], [3, 4], [1, 3]]));
// console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
// console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));
