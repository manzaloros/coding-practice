/* eslint-disable no-bitwise */
const getSum = function (a, b) {
  let [x, y] = [Math.abs(a), Math.abs(b)];

  if (x < y) return getSum(b, a);

  const sign = a > 0 ? 1 : -1;

  if (a * b >= 0) {
  // x + y, x > y
  // while the carry isn't 0
    while (y !== 0) {
      let answer = x ^ y;
      let carry = (x & y) << 1;
      x = answer;
      y = carry;
    }
  } else {
  // x - y, x > y
  // while borrow is  not 0
    while (y !== 0) {
      let answer = x ^ y;
      let borrow = ((~x) & y) << 1;
      x = answer;
      y = borrow;
    }
  }

  return x * sign;
};

getSum(15, -2);
