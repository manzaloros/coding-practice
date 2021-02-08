/* eslint-disable no-param-reassign */
const placeHelper = (num, place) => Math.floor((num / 10 ** place) % 10);

const digitHelper = (num) => Math.floor(Math.log10(num)) + 1;

const mostDigits = (nums) => {
  let maxDigits = 0;
  nums.forEach((num) => {
    maxDigits = Math.max(maxDigits, digitHelper(num));
  });
  return maxDigits;
};

const radixSort = (nums) => {
  const maxDigits = mostDigits(nums);

  for (let i = 0; i < maxDigits; i += 1) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    nums.forEach((num) => {
      const digit = placeHelper(num, i);
      digitBuckets[digit].push(num);
    });
    nums = [].concat(...digitBuckets);
  }
  return nums;
};
console.log(placeHelper(12345, 3));
console.log(placeHelper(897654321, 2));
console.log(digitHelper(5000) === 4);
console.log(mostDigits([21212, 2, 44]) === 5);
console.log(radixSort([7, 163, 52, 12345, 33]));
