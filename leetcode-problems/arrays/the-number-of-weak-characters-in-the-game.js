/**
 * @param {number[][]} properties
 * @return {number}
 */
let numberOfWeakCharacters = function (props) {
  const comparator = (a, b) => {
    // If both attacks are the same, sort the defense in DECREASING order so
    // that it isn't counted
    if (a[0] === b[0]) return a[1] > b[1] ? -1 : 1;

    return a[0] < b[0] ? -1 : 1;
  };

  props.sort(comparator);

  let count = 0;
  // Treating -infinity as max till now means first num will never be less than it
  let maxDefenseTillNow = -Infinity;

  for (let i = props.length - 1; i >= 0; i -= 1) {
    const currDefense = props[i][1];

    if (currDefense < maxDefenseTillNow) count += 1;

    maxDefenseTillNow = Math.max(maxDefenseTillNow, currDefense);
  }

  return count;
};

// numberOfWeakCharacters([[7, 9], [10, 7], [6, 9], [10, 4], [7, 5], [7, 10]]);
numberOfWeakCharacters([[7, 9], [7, 5], [10, 8], [10, 7]]);
