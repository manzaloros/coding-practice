/* We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup (250ml) of champagne.

Then, some champagne is poured in the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)

For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.



Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.)



Example 1:

Input: poured = 1, query_row = 1, query_glass = 1
Output: 0.00000
Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.
Example 2:

Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.
Example 3:

Input: poured = 100000009, query_row = 33, query_glass = 17
Output: 1.00000


Constraints:

0 <= poured <= 109
0 <= query_glass <= query_row < 100 */

const champagneTower = (poured, row, col) => {
  // The below solution takes too long:
  // /* A bit hard for me to come up with a (good) solution. My idea is to know for a specific cup how much the two cups above will pour inside it, redoning the process until we reach the top of the tower. We also have to keep track of the results because some cups will be checked multiple times. Like this we only have to check at most ~55% of the tower (from top to the wanted row) in case we want to know the state of a cup in the middle of this row. */

  // let called = 0
  // const champagneFrom = (i, j) => {
  //   // Champagne poured is what is above cup at the top
  //   if (i < 0) return poured;

  //   console.log("called: ", called++);

  //   // If outside the tower
  //   if (j < 0 || j > i) return 0;

  //   // Return sum of half the overflow of (two cups above - capacity)
  //   // Max is for the cups that will not be filled, or else it will result with negative number
  //   // (Like if the cups want to suck the champagne below)
  //   return Math.max(0, 0.5 * (
  //     champagneFrom(i - 1, j - 1) + champagneFrom(i - 1, j)) - 1);
  // }

  // // Min is because we don't care about overflow but only how much it contains
  // return Math.min(1, 0.5 * (
  //   champagneFrom(queryRow - 1, queryGlass - 1) + champagneFrom(queryRow - 1, queryGlass)
  // ));

  if (!row) return Math.min(poured, 1);

  const memo = new Array(row + 1).fill(0).map((_, i) => new Array(i + 1).fill(undefined));

  const leftOverFrom = (row, col) => {
    if (row === 0) return (col !== 0 || poured <= 1) ? 0 : ((poured - 1) / 2);
    if (col < 0 || col >= row + 1) return 0; // out of bounds

    if (memo[row][col] !== undefined) return memo[row][col]; // memoized

    const totalPouredHere = leftOverFrom(row - 1, col - 1) + leftOverFrom(row - 1, col);
    if (totalPouredHere <= 1) return memo[row][col] = 0;
    return memo[row][col] = (totalPouredHere - 1) / 2;
  }

  return Math.min(leftOverFrom(row - 1, col - 1) + leftOverFrom(row - 1, col), 1);
}

console.log(champagneTower(100000009, 33, 17));