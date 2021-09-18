let canCompleteCircuit = function (gas, cost) {
  for (let i = 0; i < gas.length; i += 1) {
    let currSum = 0;

    let start = i;
    let j = i;
    while ((currSum + (gas[j] - cost[j])) >= 0) {
      currSum += (gas[j] - cost[j]);

      j = (j + 1) % gas.length;
      if (j === start) return start;
    }
  }
  return -1;
};
