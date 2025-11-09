/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
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

/**
 * The key here is that we're keeping a reference to the most recently pushed
 * interval in the output, so if we encounter another interval that needs to be
 * merged with it, we update the reference in the output. We ONLY push a new
 * reference to the output when it shouldn't be merged, and we update our
 * reference to the interval we might need to merge in the future.
 */
const mergeAlternate = (intervals) => {
	if (intervals.length === 1) return intervals;

	intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

	let newInterval = [intervals[0][0], intervals[0][1]];
	const res = [];
	res.push(newInterval);

	intervals.forEach(([cStart, cEnd]) => {
		if (cStart <= newInterval[1]) {
			// update merged interval, could be in the output(!)
			newInterval[1] = Math.max(newInterval[1], cEnd);
		} else {
			// create a new reference to an array with the current start and end and
			// add to the output. If there's an interval after this that needs to be
			// merged, we'll update this reference in the next pass of the loop
			newInterval = [cStart, cEnd];
			res.push(newInterval);
		}
	});

	return res;
};

mergeAlternate([
	[1, 2],
	[2, 5],
]);
