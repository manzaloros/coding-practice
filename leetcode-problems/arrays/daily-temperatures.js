let dailyTemperatures = function (temperatures) {
  // Answer will hold number of days, which are index differences!
  const answer = [];
  // stack holds indices of temperatures that are strictly increasing...  but
  // the actual numbers in the stack won't be increasing
  const stack = [];
  const length = (s) => s.length;
  const isEmpty = (s) => length(s) > 0;
  const top = (s) => s[length(s) - 1];

  for (let currentIndex = temperatures.length - 1; currentIndex >= 0; currentIndex -= 1) {
    const currentTemperature = temperatures[currentIndex];

    // Keep removing temperatures from the stack that are less than your current
    // temperature
    while (!isEmpty(stack) && temperatures[top(stack)] <= currentTemperature) {
      stack.pop();
    }

    // calculate how many days to wait
    answer[currentIndex] = !isEmpty(stack) ? top(stack) - currentIndex : 0;
    stack.push(currentIndex);
  }

  return answer;
};
