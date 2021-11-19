let hammingDistance = function (x, y) {
  // gives you a number representing all the bit that x OR y has set
  let xor = x ^ y;

  let distance = 0;

  while (xor !== 0) {
    if (xor % 2 === 1) distance += 1;
    // both ways determine if first bit is set. They mask the other bits.  if
    // (xor & 1) ...
    xor >>= 1;
  }

  return distance;
};
