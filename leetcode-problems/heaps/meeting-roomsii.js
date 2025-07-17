const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// n log n
// n for heap
/**
 * PQ holds smallest end times.
 *
 * If we ever find an element where the start is AFTER the smallest end time,
 * that means we can reuse the room. So, we dequeue the previous smallest end
 * time and enqueue the next smallest end time.
 *
 * Either way, we enqueue the end to the heap for the current meeting.
 *
 * So in the case where a room is reused, the heap size stays the same, because
 * you remove one and add one.
 *
 * And in the case where a room isn't reused, you add one to the total meeting
 * rooms.
 */
const minMeetingRooms = (intervals) => {
	intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
	const minHeap = new MinPriorityQueue();

	minHeap.enqueue(intervals[0][1]);

	intervals.forEach(([currStart, currEnd], i) => {
		if (i > 0) {
			if (currStart >= minHeap.front()) minHeap.dequeue();

			minHeap.enqueue(currEnd);
		}
	});

	return minHeap.size();
};

minMeetingRooms([
	[0, 30],
	[5, 10],
	[15, 20],
]);

// no heap
// I don't understand this one, yet. Same time complexity as the heap version?
const minMeetingRoomsNoHeap = (intervals) => {
	const startTimes = intervals
		.sort((a, b) => a[0] - b[0])
		.map((interval) => interval[0]);
	const endTimes = intervals
		.sort((a, b) => a[1] - b[1])
		.map((interval) => interval[1]);
	let count = 0;
	let endIdx = 0;

	for (let i = 0; i < startTimes.length; i += 1) {
		if (startTimes[i] < endTimes[endIdx]) count += 1;
		else endIdx += 1;
	}

	return count;
};
