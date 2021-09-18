/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  const memo = new Map();

  const backtrack = (index) => {
    if (index > nums.length - 1) return 0;

    if (memo.has(index)) return memo.get(index);

    const curr = nums[index];

    const rob = curr + backtrack(index + 2);
    const notRob = backtrack(index + 1);

    const winner = Math.max(rob, notRob);

    memo.set(index, winner);

    return Math.max(winner);
  };

  return backtrack(0);
};
