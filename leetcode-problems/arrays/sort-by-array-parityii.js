/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = (nums) => {
  const [odds, evens] = [[], []];

  nums.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });

  let isEven = 1;
  const ans = [];

  nums.forEach((num) => {
    if (isEven > 0) {
      ans.push(evens.pop());
    } else {
      ans.push(odds.pop());
    }

    isEven *= -1;
  });

  return ans;
};

let sortArrayByParityIIInPlace = function (nums) {
  let j = 1;

  nums.forEach((num, i) => {
    // only work on even indexes
    if (i % 2 === 0) {
      // if the curr num is odd, you need to swap it
      if (num % 2 === 1) {
        // increment your odd counter by 2 until you find an even num in the
        // wrong place and then swap them
        while (nums[j] % 2 === 1) j += 2;

        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  });

  return nums;
};

sortArrayByParityIIInPlace([3, 1, 4, 2]);
