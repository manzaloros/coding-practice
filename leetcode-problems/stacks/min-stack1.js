let MinStack = function () {
  this.stack = [];
  this.mins = [];
};

MinStack.prototype.push = function (val) {
  const { mins, stack } = this;
  const { length } = mins;

  if (length === 0 || val <= mins[length - 1][0]) {
    if (length > 0 && val === mins[length - 1][0]) {
      mins[length - 1][1] += 1;
    } else {
      mins.push([val, 1]);
    }
  }

  stack.push(val);
};

MinStack.prototype.pop = function () {
  const { mins, stack } = this;

  if (stack[stack.length - 1] === mins[mins.length - 1][0]) {
    mins[mins.length - 1][1] -= 1;

    if (mins[mins.length - 1][1] === 0) mins.pop();
  }

  stack.pop();
};

MinStack.prototype.top = function () {
  const { stack } = this;

  return stack[stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.mins[this.mins.length - 1][0];
};
