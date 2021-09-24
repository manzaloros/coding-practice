/**
 * @param {number} n
 * @return {number[]}
 */
// O(n log n)
let countBits = function (n) {
  const ans = [];

  const popCount = (i) => {
    let count;
    // flip least significant 1 to a 0 each time.
    for (count = 0; i !== 0; count += 1) i &= i - 1;
    return count;
  };

  for (let i = 0; i <= n; i += 1) {
    ans[i] = popCount(i);
  }

  return ans;
};
