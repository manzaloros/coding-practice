/* Given a list of intervals, remove all intervals that are covered by another interval in the list.

Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

Example:
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

 */

const removeCoveredIntervals = (intervals) => {
  let coveredIntervalsCount = 0;
  const compareSet = new Set();
  for (let i = 0; i < intervals.length; i += 1) {
    const current = intervals[i];
    for (let j = 0; j < intervals.length; j += 1) {
      if (j === i || compareSet.has((intervals[j].toString()))) {
        continue;
      }
      const compare = intervals[j];
      if (current[0] <= compare[0] && current[1] >= compare[1]) {
        // Need to remove compare from array
        compareSet.add(compare.toString());
        coveredIntervalsCount += 1;
      }
    }
  }

  return intervals.length - coveredIntervalsCount;
}

console.log(removeCoveredIntervals([[34335, 39239], [15875, 91969], [29673, 66453], [53548, 69161], [40618, 93111]]))