const jump = (nums) => {
  let [maxReachable, currEnd] = [0, 0];
  let jumps = 0;

  nums.forEach((num, i) => {
    if (i < nums.length - 1) {
      maxReachable = Math.max(maxReachable, num + i);

      if (i === currEnd) {
        jumps += 1;
        currEnd = maxReachable;
      }
    }
  });

  return jumps;
};
