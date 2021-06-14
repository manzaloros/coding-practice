// Input: number representing the number of rounds in a single RPS game
// Output: Array of arrays: [['rock', 'rock'], ['rock', 'paper'], ['rock',
// 'scissors']...]
// Constraints: Recursive solution
// Time Complexity: ?

/*
num: 2
          rock paper scissors
          []
          /
         [rock]
         / \ \
 [rock, rock]  rp rs
*/

const rockPaperScissors = (numberOfThrows) => {
  const result = [];
  const choices = ['rock', 'paper', 'scissors'];

  const recurse = (currentPlay) => {
    // base case
    // when we reach the root of the tree
    // stop recursing
    if (currentPlay.length === numberOfThrows) {
      result.push(currentPlay);
      return;
    }

    // if we haven't reached the root:
    // for each choice of RPS
    // add all the possible choices after it
    for (let i = 0; i < choices.length; i += 1) {
      const currentChoice = [choices[i]];
      const nextPlay = currentPlay.concat(currentChoice);
      recurse(nextPlay);
    }
  };

  recurse([]);

  return result;
};

// numberOfElements ^ throwsInGame
rockPaperScissors(1);
