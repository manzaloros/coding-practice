/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}

 2 5 2 1 2 => 5

         i
 1 2 2 2 5

 list:[]
 temp:[1 2]

 bt(0, 5)
   bt(1, 4)
     bt(2, 2)
       bt(4, -3)

 */
// Subsets are O(2^n) time
let combinationSum2 = function (candidates, target) {
  // sort so you can ignore duplicates
  candidates.sort((a, b) => (a < b ? -1 : 1));

  const list = [];
  const temp = [];

  // Could also be named backtrack
  const dfs = (index, remain) => {
    if (remain === 0) {
      list.push([...temp]);
    } else if (remain > 0) {
      for (let i = index; i < candidates.length; i += 1) {
        const curr = candidates[i];

        if (i > index && curr === candidates[i - 1]) continue;

        temp.push(curr);
        dfs(i + 1, remain - curr);
        temp.pop();
      }
    }
  };

  dfs(0, target);

  return list;
};

combinationSum2([2, 5, 2, 1, 2], 5);
