/*
 * We want to reach a packing goal of cookie goodie bags. We have an
 * inventory of small bags (1 pound each) and big bags (5 pounds each).
 * Return the number of small bags to use, assuming we always
 * use big bags before small bags. Return -1 if it can't be done.
 */
const createPackage = (small, big, goal, [numberOfBigBags, numberForGoal] = [big, goal]) => {
  while (numberForGoal >= 5 && numberOfBigBags > 0) {
    numberForGoal -= 5;
    numberOfBigBags -= 1;
  }
  return numberForGoal <= small ? numberForGoal : -1;
};

const assert = require('assert').strict;
assert.equal(
  createPackage(4, 1, 9),
  4,
);

assert.equal(
  createPackage(4, 1, 10),
  -1,
);

assert.equal(
  createPackage(4, 1, 7),
  2,
);

assert.equal(
  createPackage(6, 2, 7),
  2,
);

assert.equal(
  createPackage(4, 1, 5),
  0,
);

assert.equal(
  createPackage(4, 1, 4),
  4,
);

assert.equal(
  createPackage(5, 4, 9),
  4,
);

assert.equal(
  createPackage(9, 3, 18),
  3,
);