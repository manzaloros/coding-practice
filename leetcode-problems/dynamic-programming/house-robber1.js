let rob = function (nums) {
  const memo = [];

  const backtrack = (index) => {
    if (index >= nums.length) return 0;
    const curr = nums[index];

    if (memo[index] !== undefined) return memo[index];

    const rob = curr + backtrack(index + 2);
    const notRob = backtrack(index + 1);

    const winner = Math.max(rob, notRob);
    memo[index] = winner;

    return winner;
  };

  return backtrack(0);
};

const robTabulation = (nums) => {
  const { length: n } = nums;

  const maxRobbedAmount = Array(n + 1).fill(0);

  maxRobbedAmount[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i -= 1) {
    maxRobbedAmount[i] = Math.max(maxRobbedAmount[i + 1],
      maxRobbedAmount[i + 2] + nums[i]);
  }

  return maxRobbedAmount[0];
};

const robBottomUpNoTable = (nums) => {
  const { length: n } = nums;

  let [robNext, robNextPlusOne] = [nums[n - 1], 0];

  for (let i = n - 2; i >= 0; i -= 1) {
    const current = Math.max(robNext, robNextPlusOne + nums[i]);

    robNextPlusOne = robNext;
    robNext = current;
  }

  return robNext;
};

robTabulation([1, 2, 3, 1]);
rob([2, 7, 9, 3, 1]);
