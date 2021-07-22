/*
  i: array of nums
  o: num rep min num of fountains so that whole array is covered

  fountain must cover at least 1

  array at least 1
  sort?
*/

// Time: O(n)
// Space: O(n)
// DP preprocess and greedy for jump game
const fountainActivation = (fountains) => {
  // Pre-process array so that jumps[i] is the max range of all the fountains
  // having their range's left boundry at i
  const jumps = Array(fountains.length).fill(0);

  for (let i = 1; i <= fountains.length; i += 1) {
    let left = Math.max(i - fountains[i - 1], 1);
    let right = Math.min(i + fountains[i - 1], fountains.length);
    jumps[left] = Math.max(jumps[left], right - left);
  }

  // Jump Game 2
  let furthest = 0;
  let currentJumpEnd = 0;
  let minFountains = 0;

  for (let i = 0; i < jumps.length; i += 1) {
    const currentJump = jumps[i];
    furthest = Math.max(furthest, currentJump + i);

    if (i === currentJumpEnd) {
      currentJumpEnd = furthest;
      minFountains += 1;
    }
  }

  return minFountains;
};

const fountainActivationDP = (fountains) => {
  const backtrack = (index) => {

  };

  return backtrack();
};

fountainActivation([1, 2, 1]);
