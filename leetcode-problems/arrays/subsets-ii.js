/*
  Time: O(3^n) for generating each subsets
  Space: O(3^n) for generating all possibilities for each subset
*/
const subsetsWithDup = function (nums) {
  nums.sort((a, b) => (a < b ? -1 : 1));

  const result = [];
  const temp = [];

  const backtrack = (i) => {
    result.push([...temp]);

    for (let j = i; j < nums.length; j += 1) {
      // need this if the input has duplicate numbers
      // can also be:
      // if (j !== i && nums[j] === nums[j - 1]) continue
      if (j === i || nums[j] !== nums[j - 1]) {
        temp.push(nums[j]);
        backtrack(j + 1);
        temp.pop();
      }
    }
  };

  backtrack(0);

  return result;
};

subsetsWithDup([1, 2, 2]);
