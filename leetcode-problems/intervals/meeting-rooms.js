/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// O(n log n)
const canAttendMeetings = (intervals) => {
  if (intervals.length === 0) return true;

  // can do (a,b)=>a[0]-b[0]
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  let currEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i += 1) {
    const [nextStart, nextEnd] = intervals[i];

    // if the next meeting starts before the previous meeting ends
    if (nextStart < currEnd) return false;

    currEnd = nextEnd;
  }

  return true;
};
