// O(n * 2^n)
let largestDivisibleSubset = function (nums) {
  let result = [];
  const temp = [];

  const memo = new Map();

  const isDivisible = (arr, num) => arr.reduce(
    (res, curr) => (curr % num === 0 || num % curr === 0) && res,
    true,
  );

  const backtrack = (index) => {
    result = temp.length > result.length ? [...temp] : result;

    for (let i = index; i < nums.length; i += 1) {
      const curr = nums[i];

      if (isDivisible(temp, curr)) {
        temp.push(curr);
        backtrack(i + 1);
        temp.pop();
      }
    }
  };

  backtrack(0);

  return result;
};

// O(n^2)
const largestDivisibleSubsetTopDown = (nums) => {
  const memo = new Map();

  nums.sort((a, b) => (a < b ? -1 : 1));

  const backtrack = (index) => {
    if (memo.has(index)) return memo.get(index);

    let max = [];
    const curr = nums[index];

    // this notation is slow, use for-loop instead
    Array(index).fill().map((el, i) => i).forEach((nextIndex) => {
      if (curr % nums[nextIndex] === 0) {
        const subset = backtrack(nextIndex);

        if (max.length < subset.length) max = subset;
      }
    });

    const newEntry = [...max];
    newEntry.push(curr);

    memo.set(index, newEntry);

    return newEntry;
  };

  let maxSubset = [];

  nums.forEach((num, i) => {
    const subset = backtrack(i);

    if (maxSubset.length < subset.length) maxSubset = subset;
  });

  return maxSubset;
};

// largestDivisibleSubset([1, 2, 3]);
// largestDivisibleSubset([1, 2, 4, 8]);
// largestDivisibleSubset([1, 2, 3, 4]);
largestDivisibleSubsetTopDown([2, 10000, 10000001]);
largestDivisibleSubset([1]);
