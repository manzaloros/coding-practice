const power = function (base, exponent) {
  return exponent === 0 ? 1 : base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 8