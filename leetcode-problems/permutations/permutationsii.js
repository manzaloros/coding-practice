/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
  Input nums can include duplicates. Order matters.

*/
let permuteUnique = function (nums) {
  const res = [];

  nums.sort((a, b) => (a < b ? -1 : 1));

  const backtrack = (temp) => {
    if (temp.length === nums.length) {
      res.push([...temp]);
    } else {
      nums.forEach((num, i) => {
        const prev = nums[i - 1];

        // If you haven't set current num to null already and it isn't a
        // duplicate with the prev num (since it's sorted)
        if (num !== null && num !== prev) {
          nums[i] = null;

          temp.push(num);
          backtrack(temp);
          temp.pop();

          nums[i] = num;
        }
      });
    }
  };

  backtrack([]);

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
  Input nums can include duplicates. Order matters.

*/
let permuteUniqueMoreLikeTemplate = function (nums) {
  const res = [];
  const temp = [];

  nums.sort((a, b) => (a < b ? -1 : 1));

  const backtrack = () => {
    if (temp.length === nums.length) {
      res.push([...temp]);
    } else {
      nums.forEach((num, i) => {
        const prev = nums[i - 1];

        // If you haven't set current num to null already and it isn't a
        // duplicate with the prev num (since it's sorted)
        if (num !== null && num !== prev) {
          nums[i] = null;

          temp.push(num);
          backtrack();
          temp.pop();

          nums[i] = num;
        }
      });
    }
  };

  backtrack();

  return res;
};
