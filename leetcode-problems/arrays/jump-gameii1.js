// This recursive, top down DP passes but is very slow

// Time:
const jump = (nums) => {
  const { length } = nums;
  const memo = new Map();

  const backtrack = (startingIndex) => {
    const currentMaxJump = nums[startingIndex];

    if (startingIndex === length - 1) return 0;
    if (startingIndex >= length || currentMaxJump === 0) return length;
    if (memo.has(startingIndex)) return memo.get(startingIndex);

    const maxReachableIndex = startingIndex + currentMaxJump;
    let minSteps = length;

    // Start by jumping at least one space over. End when you've jumped the max spaces.
    for (let i = startingIndex + 1; i < maxReachableIndex + 1; i += 1) {
      // adding one to record the jump
      const jumpTry = 1 + backtrack(i);

      minSteps = Math.min(minSteps, jumpTry);
    }

    memo.set(startingIndex, minSteps);

    return minSteps;
  };

  return backtrack(0);
};

// jump([2, 3, 0, 1, 4]);
jump([1, 2, 1, 1, 1]);
