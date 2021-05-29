const eraseOverlapIntervals = (intervals) => {
  intervals.sort(([a0, b0], [a1, b1]) => b0 - b1);

  const dp = Array(intervals.length);
  dp[0] = 1;

  let ans = 1;

  for (let i = 1; i < dp.length; i += 1) {
    let max = 0;

    for (let j = i - 1; j >= 0; j -= 1) {
      if (intervals[j][1] <= intervals[i][0]) {
        max = Math.max(dp[j], max);
      }
    }
    dp[i] = max + 1;
    ans = Math.max(ans, dp[i]);
  }

  return intervals.length - ans;
};

eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]);
