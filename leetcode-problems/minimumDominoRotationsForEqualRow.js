/* In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.



Example 1:


Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation:
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation:
In this case, it is not possible to rotate the dominoes to make one row of values equal.


Constraints:

2 <= A.length == B.length <= 2 * 104
1 <= A[i], B[i] <= 6
 */


/*
Explanation :
4 ways to check if it possible or not:
1.make all values in A equal to A[0].
2.make all values in B equal to A[0].
3.make all values in A equal to B[0].
4.make all values in B equal to B[0].
 */
const minDominoRotations = (a, b) => {
  let minSwaps = Infinity;
  minSwaps = Math.min(swaps(a[0], a, b), swaps(b[0], a, b));

  minSwaps = Math.min(minSwaps, Math.min(swaps(a[0], b, a), swaps(b[0], b, a)));

  return isFinite(minSwaps) ? minSwaps : -1;
}

const swaps = (v, a, b) => {
  let nSwaps = 0;
  let n = a.length;

  for (let i = 0; i < n; i += 1) {
    if (v !== a[i] && v !== b[i]) return Infinity;

    if (v === a[i]) continue;

    if (v === b[i]) nSwaps += 1;
  }

  return nSwaps;
}

// console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]))
console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]))