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
			// Otherwise, make the new end the current interval's end. Only update the
			// end when the current interval is outside the previous end
			end = current[1];
		}
	}

	return total;
};
// Try this to see why you have to sort by ending interval:
eraseOverlapIntervals([
	[1, 100],
	[11, 22],
	[1, 11],
	[2, 12],
]);

// gives a time limit exceeded. Exponential time complexity without memoization.
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
			result =
				Math.min(
					backtrack(index - 1, start),
					backtrack(index - 1, intervals[index - 1][0]),
				) + 1;
		}

		return result;
	};

	return backtrack(length - 1, intervals[length - 1][1]);
};

// gives a time limit exceeded
// O(n^2)
const eraseOverlapIntervalsTopDownBetter = (intervals) => {
	intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
	const { length } = intervals;
	const memo = new Map();

	const backtrack = (prev, curr) => {
		if (curr === length) return 0;

		const key = `${prev}:${curr}`;
		if (memo.has(key)) return memo.get(key);

		let take = Number.POSITIVE_INFINITY;
		let notTake = 0;

		if (prev === -1 || intervals[prev][1] <= intervals[curr][0])
			take = backtrack(curr, curr + 1);

		notTake = backtrack(prev, curr + 1) + 1;

		const winner = Math.min(take, notTake);
		memo.set(key, winner);

		return winner;
	};

	return backtrack(-1, 0);
};

console.log(
	eraseOverlapIntervalsTopDown([
		[1, 2],
		[2, 3],
		[3, 4],
		[1, 3],
	]),
);
// console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
// console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));

// converted to bottom up, also time limit exceeded
const bottomUp = (intervals) => {
	if (intervals.length === 0) return 0;

	// Sort by start time
	intervals.sort((a, b) => a[0] - b[0]);

	const n = intervals.length;
	const dp = new Array(n).fill(1);

	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (intervals[j][1] <= intervals[i][0]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	const maxNonOverlapping = Math.max(...dp);
	return n - maxNonOverlapping;
};

// bottom up DP with binary search:
const eraseOverlapIntervalsComplicated = (intervals) => {
  if (intervals.length === 0) return 0;

  // Sort by end time (crucial for binary search)
  intervals.sort((a, b) => a[1] - b[1]);

  const n = intervals.length;
  const dp = new Array(n).fill(0);
  dp[0] = 1; // At least one interval can be taken

  for (let i = 1; i < n; i++) {
    // Binary search for the last non-overlapping interval
    let low = 0;
    let high = i - 1;
    let lastNonOverlap = -1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (intervals[mid][1] <= intervals[i][0]) {
        lastNonOverlap = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    const include = (lastNonOverlap !== -1 ? dp[lastNonOverlap] : 0) + 1;
    const exclude = dp[i - 1];

    dp[i] = Math.max(include, exclude);
  }

  return n - dp[n - 1]; // Total intervals - max non-overlapping
};

// can also do the top down version with binary search:
const topDownBinary = (intervals) => {
intervals.sort((a, b) => a[1] - b[1]); // Sort by end time for binary search

  const n = intervals.length;
  const memo = new Map();

  // Binary search: find rightmost index j where intervals[j][1] <= intervals[i][0]
  const findLastNonOverlapping = (i) => {
    let low = 0;
    let high = i - 1;
    let res = -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (intervals[mid][1] <= intervals[i][0]) {
        res = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return res;
  };

  const dp = (i) => {
    if (i < 0) return 0;

    if (memo.has(i)) return memo.get(i);

    // Option 1: Exclude current interval
    const exclude = dp(i - 1);

    // Option 2: Include current interval
    const lastNonOverlap = findLastNonOverlapping(i);
    const include = 1 + dp(lastNonOverlap);

    // Winner
    const result = Math.max(include, exclude);
    memo.set(i, result);
    return result;
  };

  const maxNonOverlapping = dp(n - 1);
  return n - maxNonOverlapping;
}