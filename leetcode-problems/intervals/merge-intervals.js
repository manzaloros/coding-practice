/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function (intervals) {
  const res = [];
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  intervals.push([Infinity, Infinity]);

  let [start, end] = [intervals[0][0], intervals[0][1]];

  intervals.forEach(([cStart, cEnd]) => {
    if (cStart > end) {
      res.push([start, end]);
      start = cStart;
      end = cEnd;
    } else {
      end = Math.max(cEnd, end);
    }
  });

  return res;
};

let mergeAlternate = (intervals) => {
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  let newInterval = [intervals[0][0], intervals[0][1]];
  const res = [];
  res.push(newInterval);

  intervals.forEach(([cStart, cEnd]) => {
    if (cStart <= newInterval[1]) {
      newInterval[1] = Math.max(newInterval[1], cEnd);
    } else {
      newInterval = [cStart, cEnd];
      res.push(newInterval);
    }
  });

  return res;
};

mergeAlternate([[1, 2], [2, 5]]);
