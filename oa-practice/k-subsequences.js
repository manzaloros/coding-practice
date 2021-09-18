const kSub = (nums, k) => {
  const remainders = new Map();
  remainders.set(0, 1);

  let total = 0;
  let runningRemainder = 0;

  nums.forEach((num) => {
    runningRemainder += num;

    runningRemainder %= k;
    if (runningRemainder < 0) runningRemainder += k;

    const seenRemainder = remainders.get(runningRemainder);

    if (seenRemainder) {
      total += remainders.get(runningRemainder);
    }

    if (!seenRemainder) remainders.set(runningRemainder, 0);
    remainders.set(runningRemainder, seenRemainder || 0 + 1);
  });

  return total;
};

kSub([-5, -10, 11, 9, 5], 5);
// kSub([1, 2, 3, 4, 1], 3);
// 1 2 3 4 1
