/* You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.

Return that maximum distance to the closest person.



Example 1:


Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation:
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
Example 2:

Input: seats = [1,0,0,0]
Output: 3
Explanation:
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
Example 3:

Input: seats = [0,1]
Output: 1


Constraints:

2 <= seats.length <= 2 * 104
seats[i] is 0 or 1.
At least one seat is empty.
At least one seat is occupied. */

const maxDistToClosest = (seats,
  [maxDist, i, j] = [0, 0, 1],
  { length } = seats) => {
  const leftSeatOccupied = () => seats[i] === 1;
  const rightSeatOccupied = () => seats[j] === 1;
  const isEndOfRow = () => (j + 1) === length;
  const distanceToEndOfRow = () => j - i;
  const distanceBetweenSeats = () => Math.ceil(((j - 1) - i) / 2);

  while (j < length) {
    while (!rightSeatOccupied() && !isEndOfRow()) {
      j += 1;
    }

    maxDist = rightSeatOccupied() && leftSeatOccupied()
      ? Math.max(maxDist, distanceBetweenSeats())
      : Math.max(maxDist, distanceToEndOfRow())

    i = j++;
  }

  return maxDist;
}

// console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]))
// console.log(maxDistToClosest([0, 0, 1]))
// console.log(maxDistToClosest([0, 1]))
console.log(maxDistToClosest([1, 0, 0, 1]))