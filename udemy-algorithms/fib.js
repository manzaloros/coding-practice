const fib = function (numOfTimes, curr = 1, prev = 0) {
  return numOfTimes === 1 ? curr : fib(numOfTimes - 1, curr + prev, curr)
}

console.log(fib(4)); // 3