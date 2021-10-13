/*
  Smallest interval that overlaps every other interval
*/
const smallestSet = (intervals) => {
  // Sort by endings so you know that your first interval will have the lowest
  // ending (and this can thus be the start of your covering interval)
  intervals.sort((a, b) => (a[1] < b[1] ? -1 : 1));

  // this is the lowest start that will cover your first interval, because your
  // intervals were sorted ascending by end.
  let highestStart = intervals[0][1];
  const coveringInterval = [highestStart, highestStart + 1];
  /*
    If you find an interval whose current start is higher than your highest start,
    you need to update the end, which should be the lowest number that will cover
    that biggest interal
  */
  intervals.forEach(([currentStart, currentEnd], i) => {
    if (i >= 1) {
      if (currentStart > highestStart) {
        highestStart = currentStart;

        coveringInterval[1] = highestStart;
      }
    }
  });

  return coveringInterval;
};

// smallestSet([[0, 3], [2, 6], [3, 4], [2, 9]]); // [3,6]
// smallestSet([[0, 1]]); // what should this return?
// smallestSet([[0, 4], [1, 2]]);
// smallestSet([[0, 1], [3, 5], [1, 2], [11, 17]]);
// smallestSet([[0, 1], [5, 10], [15, 20], [7, 8]]);
// smallestSet([[1, 4], [4, 5], [7, 9], [9, 12]]);
// smallestSet([[0, 7], [1, 6], [2, 5], [3, 4]]);
// smallestSet([[0, 4], [0, 3], [0, 2], [0, 1]]);
smallestSet([[0, 3], [2, 6], [3, 4], [6, 9]]);
