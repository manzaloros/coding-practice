let singleNumber = function (nums) {
  let bitmask = 0;

  // bitmask will NOT keep any num that appears twice since a^a = 0. in the end,
  // the bitmask will only keep the difference between the two numbers
  nums.forEach((num) => {
    bitmask ^= num;
  });

  // isolate rightmost 1 bit and set all other bits to 0
  const diff = bitmask & (-bitmask);

  let x = 0;

  nums.forEach((num) => {
    if ((num & diff) !== 0) x ^= num;
  });

  return [x, bitmask ^ x];
};
