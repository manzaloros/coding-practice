/*

  i: num rep. max runtime per hour, [num weights], [num rep task durations]
  o: num rep. max total weight you can do in an hour

  p is limit that you can get by summing (2 * length) for each task

  Time: O(n*W) memoized. O(2^n) not memoized.
  Space: O(n*W) for call stack and memo
*/

const maximumTotalWeight = (weights, tasks, p) => {
  const memo = new Map();

  const backtrack = (index, taskSum) => {
    // base case
    if (taskSum * 2 > p) return -weights[index - 1]; // subtrack the weight from total if it exceeds
    if (index > tasks.length - 1) return 0;

    const key = `${index}:${taskSum}`;
    if (memo.has(key)) return memo.get(key);

    // enumerate desisions
    // choose to keep a task or not
    const weightIfKeep = weights[index] + backtrack(index + 1, tasks[index] + taskSum);
    const weightIfDrop = backtrack(index + 1, taskSum);

    const winner = Math.max(weightIfKeep, weightIfDrop);
    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, 0);
};

maximumTotalWeight([2, 4, 4, 5], [2, 2, 3, 4], 15);
// maximumTotalWeight([3, 2, 2], [3, 2, 2], 9);
