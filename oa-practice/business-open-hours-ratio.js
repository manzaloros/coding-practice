/*
  input: array of intervals [start, end], int open hours for business.
  output: fraction of query time the business is open

  queryTimeRange: 4-10, openHours: 0-24. How much of the query time is the
  business open?
  [0,24] [4,10]. Business hours completely enclose query time, 100%.

  b: [9, 12], q: [11, 13].
  Overlap is 1. Total query hors is 2. 1 / 2 = 0.5
  Iterate over query hours, find number of hours overlap.
  return overlap / total hours from query

  b: 0-2, 20-24. q: 0-24. Overlap is 2 + 2 = 4. Total is 4 / 24 = 0.25
*/
const openHoursRatio = ([queryStart, queryEnd], openHours) => {
  openHours.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  const findOverlap = (overlap, [businessStart, businessEnd]) => {
    // If the business open / close times overlaps with a query range
    if (queryStart < businessEnd && queryEnd > businessStart) {
      let overlapStart = Math.max(queryStart, businessStart);
      let overlapEnd = Math.min(queryEnd, businessEnd);

      overlap += (overlapEnd - overlapStart);
    }

    return overlap;
  };

  return openHours.reduce(findOverlap, 0) / (queryEnd - queryStart);
};

// openHoursRatio([4, 10], [[0, 24]]);
// openHoursRatio([7, 11], [[9, 17]]);
// openHoursRatio([0, 24], [[0, 2], [20, 24]]);
openHoursRatio([5, 22], []);
