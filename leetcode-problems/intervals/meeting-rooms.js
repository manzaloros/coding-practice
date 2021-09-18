/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// O(n log n)
let canAttendMeetings = function (intervals) {
  if (intervals.length === 0) return true;

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  let currEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i += 1) {
    const curr = intervals[i];

    if (curr[0] < currEnd) return false;

    currEnd = curr[1];
  }

  return true;
};
