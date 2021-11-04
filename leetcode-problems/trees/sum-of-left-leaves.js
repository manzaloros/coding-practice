const sumOfLeftLeaves = ({ left, right, val }, isLeft = false, sum = 0) => {
  if (left) {
    sum += sumOfLeftLeaves(left, true);
  } else if (isLeft && !right) {
    sum += val;
  }

  if (right) sum += sumOfLeftLeaves(right, false);

  return sum;
};
