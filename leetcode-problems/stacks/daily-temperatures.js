/* Given a list of daily temperatures temperatures, return a list such that, for
each day in the input, tells you how many days you would have to wait until a
warmer temperature. If there is no future day for which this is possible, put 0
instead.

For example, given the list of temperatures temperatures = [73, 74, 75, 71, 69,
72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each
temperature will be an integer in the range [30, 100]. */
/*
I: [] of nums
O: [] of nums
*/

/*
                      t   i
[73, 74, 75, 71, 69, 72, 76, 73]
i: 7
t[i]: 73
t[stack top]: 76
index: 5
stack: [2, 3, 6, 7]
daysToWait: [1, 1, , , 1, 1]
*/

const dailyTemperatures = (t, { length } = t) => {
  const daysToWait = Array(length).fill(0);
  // stack tracks indexes of unprocessed days
  const stack = [];

  for (let i = 0; i < length; i += 1) {
    // Important that this is a while loop!  Keeping popping while your stack
    // index temps are less than your current temp
    while (stack.length !== 0 && t[i] > t[stack[stack.length - 1]]) {
      // Get the last warmest index from top of the stack
      const index = stack.pop();
      daysToWait[index] = i - index;
    }

    stack.push(i);
  }

  return daysToWait;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
