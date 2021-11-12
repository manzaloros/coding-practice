const minStartValue = (nums) => nums.reduce(([minStart, runningTotal], num, i) => {
  const currSum = num + runningTotal;

  if (currSum < 1) {
    runningTotal = 1;
    const extraNeeded = runningTotal - currSum;

    minStart += extraNeeded;
  } else runningTotal = currSum;

  return i === nums.length - 1 ? minStart : [minStart, runningTotal];
}, [1, 1]);

// minStartValue([-3, 2, -3, 4, 2]);
minStartValue([1, -2, -3]);
