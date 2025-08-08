/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temps) => {
	const result = Array(temps.length).fill(0);
	const stack = [];

	/*
    Stack will contain only tempratures greater than current

    While loop will go for as long as the temp at the top of the stack is less
    than the current temperature. It will then set each corresponding index of
    the array at current - the index temperature when that temperature is less
    than the current.

    The stack will be full of descending temperatures.
  */
	temps.forEach((currentTemp, currIndex) => {
		while (stack.length > 0 && temps[stack[stack.length - 1]] < currentTemp) {
			const indexOfLastSmallestTemp = stack.pop();
			result[indexOfLastSmallestTemp] = currIndex - indexOfLastSmallestTemp;
		}

		stack.push(currIndex);
	});

	return result;
};

dailyTemperatures([4, 3, 2, 5]);
