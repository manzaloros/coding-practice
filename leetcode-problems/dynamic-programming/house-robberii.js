// memoized Time: O(n)
// memoized space: O(n);
let rob = function (nums) {
  const memo = new Map();

  const { length: n } = nums;

  const backtrack = (index = 0, prevHouseRobbed = false, firstHouseRobbed = false) => {
    if (index >= n) return 0;
    if (index === n - 1 && firstHouseRobbed === true) return 0;

    const curr = nums[index];
    const key = `${index}:${prevHouseRobbed}:${firstHouseRobbed}`;

    if (memo.has(key)) return memo.get(key);

    let rob;

    if (index === 0) {
      rob = curr + backtrack(index + 1, true, true);
    } else if (prevHouseRobbed) {
      rob = -Infinity;
    } else {
      rob = curr + backtrack(index + 1, true, firstHouseRobbed);
    }

    const notRob = backtrack(index + 1, false, firstHouseRobbed);

    const winner = Math.max(rob, notRob);

    memo.set(key, winner);

    return winner;
  };

  return backtrack();
};
