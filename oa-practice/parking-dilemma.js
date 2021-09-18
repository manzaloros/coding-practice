const carParkingRoof = (n, k) => {
  if (n.length === 0) return 0;

  n = n.sort((a, b) => (a < b ? -1 : 1));

  let windowSum = Infinity;

  for (let i = 0; i <= n.length - k; i += 1) {
    windowSum = Math.min(windowSum, n[(k + i) - 1] - n[i]);
  }

  return windowSum + 1;
};

// carParkingRoof([2, 17, 8, 10], 3);
carParkingRoof([10, 3, 2, 1], 4);
