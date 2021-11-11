let minStartValue = function (nums) {
  let minStart = 1;
  let curr = minStart;

  nums.forEach((num) => {
    if (num + curr < 1) {
      let extraNeeded = 1 - (curr + num);
      minStart += (extraNeeded);

      curr = 1;
    } else {
      curr += num;
    }
  });

  return minStart;
};

// minStartValue([-3, 2, -3, 4, 2]);
minStartValue([1, -2, -3]);
