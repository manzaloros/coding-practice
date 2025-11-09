/**
 * @param {number[]} w

 i: number[] weights o: number, representing random (based on heuristic) index
 c: e:

  0,1 [1,3]

 0: 25% 1: 75%

 at least: O(N)

 Use Prefix sums and binary search.

 Binary search the prefix sums for a random number from 1 to max sum.

 Since binary search can find numbers even when they aren't in the array (the
 "left" variable at the end), it will return some index representing a random
 value.


 */
var Solution = function (w) {
	/**
     make sum and prefix
     O(n)
     */
	this.prefix = [];
	let sum = 0;

	w.forEach((num) => {
		sum += num;
		this.prefix.push(sum);
	});

	this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
	/**
    get random target
    binary search for it O(log n)
     */
	const rand = Math.random() * this.total;

	let left = 0;
	let right = this.prefix.length - 1;

	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);
		if (rand < this.prefix[mid]) right = mid;
		else left = mid + 1;
	}
	return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
