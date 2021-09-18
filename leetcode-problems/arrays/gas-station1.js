/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuitMine = function (gas, cost) {
  let curr = 0;

  // O(n^2) because you're recomputing gas - cost each time
  for (let i = 0; i < gas.length; i += 1) {
    let j = i;
    while (curr + (gas[j] - cost[j]) >= 0) {
      curr += (gas[j] - cost[j]);
      j = (j + 1) % gas.length;
      if (j === i) return i;
    }

    curr = 0;
  }

  return -1;
};

const canCompleteCircuit = (g, c) => {
  let total = 0;
  let curr = 0;
  let start = 0;

  g.forEach((gas, i) => {
    total += (gas - c[i]);
    curr += (gas - c[i]);

    if (curr < 0) {
      start = i + 1;
      curr = 0;
    }
  });

  return total >= 0 ? start : -1;
};

canCompleteCircuit([2, 3, 4], [3, 4, 3]);
