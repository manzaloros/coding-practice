/* A video game developer is developing a game in which the character makes
their way through several segments of a level. In each segment, if the character
collects a coin the player scores 1 point. However, if the segment does not have
a coin 1 point is deducted from the total score.Player 1 always begins the level
and, at some point, the game play is turned over to Player 2 to complete the
level. Player1's goal is to achieve heigher score than Player 2 once the level
is completed. Given the segment status(whether they contain the coin or not),
find the minimum number of segments Player1 should play so that, in the end
Player1's score is greater than Player2.

Example: [1,1,0,1] Player 1 has the follwoing option:

Play 0 segment- Player1's score 0 and Player2's score ->3-1=2(3 points for
segments with coin and -1 for no coin segment) Play 1 segment- Player1's score 1
and Player2's score -> 2-1=1 Play 2 segment- Player1's score 2 and Player2's
score -> 1-1=0 So the answer is 2.

Arr rep. segment status min num of indices so that your subarray sum is greater
than second half sum output: num (1 indexed, so if you go to index 1, you return
2) rep. min number of segments player 1 can play so that they beat player 2

could always change 0s to -1s
 */

// Time: O(arr.length)
// Space: O(1)
const minSegments = (arr) => {
  // change array 0s to -1s, should i do this?
  // current score is 0
  // sum array, this is subarray if the answer is 0

  // iterate array, add each element to current score
  // add element to curr score, subtract element from their score
  // when your score > their score return i + 1;

  arr = arr.map((score) => (score === 0 ? -1 : 1));
  let theirScore = arr.reduce((sum, curr) => sum + curr);

  let currentScore = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (currentScore > theirScore) return i;

    let current = arr[i];

    currentScore += current;
    theirScore -= current;
  }

  return -1;
};

minSegments([1, 1, 0, 1]);
