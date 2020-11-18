const factorial = function (num) {
  if (num === 0) return 1;
  return num === 1 ? num : num * factorial(num - 1);
}

console.log(factorial(3)) //6