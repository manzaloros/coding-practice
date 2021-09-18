const numberOfPairs = (nums, target) => {
  const set = new Set();
  const pairs = new Map();

  nums.forEach((num) => {
    if (set.has(num)) {
      // ensure only distict pairs
      const pair = [num, target - num]
        .sort((a, b) => (a < b ? -1 : 1));
      pairs.set(pair[0], pair[1]);
    }

    set.add(target - num);
  });

  // return size, not the array itself
  return pairs.size;
};

// numberOfPairs([1, 2, 3, 6, 7, 8, 9, 1], 10);
numberOfPairs([6, 1, 3, 46, 1, 3, 9], 47);
