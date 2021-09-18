/**
 * @param {number[]} heights
 * @return {number[]}
 */
let findBuildings = function (b) {
  if (b.length === 0) return [];

  const views = [];
  let tallest = 0;

  for (let i = b.length - 1; i >= 0; i -= 1) {
    const curr = b[i];

    // pointer reassignment makes it O(1)
    // do this instead of unshift
    if (curr > tallest) views.push(i);

    tallest = Math.max(curr, tallest);
  }

  return views.reverse();
};
