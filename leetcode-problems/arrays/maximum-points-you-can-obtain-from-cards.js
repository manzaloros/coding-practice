/* There are several cards arranged in a row, and each card has an associated
number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the
row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score
you can obtain.

Example 1:

Input: cardPoints = [1,2,3,4,5,6,1], k = 3 Output: 12 Explanation: After the
first step, your score will always be 1. However, choosing the rightmost card
first will maximize your total score. The optimal strategy is to take the three
cards on the right, giving a final score of 1 + 6 + 5 = 12.  Example 2:

Input: cardPoints = [2,2,2], k = 2 Output: 4 Explanation: Regardless of which
two cards you take, your score will always be 4.  Example 3:

Input: cardPoints = [9,7,7,9,7,7,9], k = 7 Output: 55 Explanation: You have to
take all the cards. Your score is the sum of points of all cards.  Example 4:

Input: cardPoints = [1,1000,1], k = 1 Output: 1 Explanation: You cannot take the
card in the middle. Your best score is 1.  Example 5:

Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3 Output: 202

Constraints:

1 <= cardPoints.length <= 10^5 1 <= cardPoints[i] <= 10^4 1 <= k <=
cardPoints.length
 */

const maxScore = (cardPoints, k, { length } = cardPoints) => {
  let window = 0;
  let totalPoints = 0;

  for (let i = 0; i < length; i += 1) {
    totalPoints += cardPoints[i];
    if (i < length - k) window += cardPoints[i];
  }

  let max = totalPoints - window;

  for (let i = 0; i < k; i += 1) {
    window -= cardPoints[i];
    window += cardPoints[length - k + i];
    max = Math.max(totalPoints - window, max);
  }

  return max;
};
/*
  TC: O(k)
  SC: O(k)
*/
const maxScoreDP = (cardPoints, k, { length } = cardPoints) => {
  // Need the 0th element to be 0 so that it leaves room for the other array to
  // represent length 3
  const frontSetOfCards = new Uint8Array(k + 1).fill(0);
  const rearSetOfCards = new Uint8Array(k + 1).fill(0);

  // Each array represents the prefix sum (like a running sum) of the cP array
  for (let i = 0; i < k; i += 1) {
    frontSetOfCards[i + 1] = frontSetOfCards[i] + cardPoints[i];
    rearSetOfCards[i + 1] = rearSetOfCards[i] + cardPoints[length - i - 1];
  }

  let max = 0;

  // i represents how many cards you will take from the front
  // Each time you increment i you remove a card from the back
  // Since the created arrays represent the running sum of the numbers, you can
  // just add them together
  for (let i = 0; i <= k; i += 1) {
    const possible = frontSetOfCards[i] + rearSetOfCards[k - i];
    max = Math.max(possible, max);
  }

  return max;
};

/*
  TC: O(k)
  SC: O(1)
*/
const maxScoreDPSpaceOptimized = (cardPoints, k, { length } = cardPoints,
  [frontScore, rearScore] = [0, 0]) => {
  // Initialize front score to be the sum of k elements from the beginning
  // (picking none from the rear)
  for (let i = 0; i < k; i += 1) {
    frontScore += cardPoints[i];
  }

  let max = frontScore;

  // i starts at k - 1, picking an element from the rear and removing one from
  // the beginning
  // "Slide" the two windows, deleting from the beginning and adding to the
  // rear, checking the max as you go
  for (let i = k - 1; i >= 0; i -= 1) {
    frontScore -= cardPoints[i];
    rearScore += cardPoints[length - k + i];
    const currentScore = frontScore + rearScore;
    max = Math.max(currentScore, max);
  }

  return max;
};

console.log(maxScoreDPSpaceOptimized([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log(maxScore([1, 1000, 1], 1));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log(maxScore([10], 1));
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8));
