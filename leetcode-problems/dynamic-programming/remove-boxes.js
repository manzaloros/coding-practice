const removeBoxes = (boxes) => {
  const memo = new Map();

  const backtrack = (start, end, numBoxesSameLeftOfStart) => {
    if (start > end) return 0;
    if (start === end) return (numBoxesSameLeftOfStart + 1) * (numBoxesSameLeftOfStart + 1);

    const key = `${start}:${end}:${numBoxesSameLeftOfStart}`;
    if (memo.has(key)) return memo.get(key);

    while (start + 1 <= end && boxes[start + 1] === boxes[start]) {
      start += 1;
      numBoxesSameLeftOfStart += 1;
    }

    // Choose to remove the box
    let result = (numBoxesSameLeftOfStart + 1) * (numBoxesSameLeftOfStart + 1)
      + backtrack(start + 1, end, 0);

    let keep = 0;

    for (let lastIndexOfSameBox = start + 1; lastIndexOfSameBox <= end; lastIndexOfSameBox += 1) {
      // choose to keep the box
      if (boxes[start] === boxes[lastIndexOfSameBox]) {
        result = Math.max(result, backtrack(start + 1, lastIndexOfSameBox - 1, 0)
          + backtrack(lastIndexOfSameBox, end, numBoxesSameLeftOfStart + 1));
      }
    }

    memo.set(key, result);

    return result;
  };

  return backtrack(0, boxes.length - 1, 0);
};
