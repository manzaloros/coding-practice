const fib = (numOfTimes, curr = 1, prev = 0) => numOfTimes === 1 ? curr : fib(numOfTimes - 1, curr + prev, curr);

console.log(fib(4)); // 3