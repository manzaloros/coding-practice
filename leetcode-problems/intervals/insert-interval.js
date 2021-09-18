/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}

 */

let insert = function (intervals, [insertStart, insertEnd]) {
  const result = [];
  let i = 0;

  // add intervals at beginning that can't possibly overlap
  while (i < intervals.length && intervals[i][1] < insertStart) {
    result.push(intervals[i]);
    i += 1;
  }

  // Here there is an overlap, so calculate new interval start and end, and push
  // that to result when you're done
  while (i < intervals.length && intervals[i][0] <= insertEnd) {
    // make the new start the smaller of the starts, and the end the larger of the ends
    insertStart = Math.min(insertStart, intervals[i][0]);
    insertEnd = Math.max(insertEnd, intervals[i][1]);
    i += 1;
  }

  result.push([insertStart, insertEnd]);

  // After the overlap, just push remaining intervals to result
  while (i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }

  return result;
};
