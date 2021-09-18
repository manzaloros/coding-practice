/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
let intervalIntersectionFirstTry = function (fL, sL) {
  const res = [];
  if (fL.length === 0 || sL.length === 0) return res;

  let [i, j] = [0, 0];

  const isOverlap = (int1, int2) => {
    if ((int1[0] <= int2[1] && int1[1] >= int2[0]) || (int2[0] <= int1[1] && int2[1] >= int1[0])) return true;
    return false;
  };

  while (i < fL.length && j < sL.length) {
    if (isOverlap(fL[i], sL[j])) {
      const intersect = [];

      intersect[0] = Math.max(fL[i][0], sL[j][0]);
      intersect[1] = Math.min(fL[i][1], sL[j][1]);
      res.push(intersect);

      if (fL[i][1] < sL[j][1]) {
        i += 1;
      } else if (fL[i][1] > sL[j][1]) {
        j += 1;
      } else {
        i += 1;
        j += 1;
      }
    } else if (fL[i][0] < sL[j][0]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return res;
};

// use a and b as params
// O(lengths of lists added together)
const intervalIntersection = (a, b) => {
  const res = [];

  let [i, j] = [0, 0];

  while (i < a.length && j < b.length) {
    // Get the upper and lower bounds. Use lo and hi
    // Make a merged interval of comparing the two intervals
    const [lo, hi] = [Math.max(a[i][0], b[j][0]), Math.min(a[i][1], b[j][1])];

    // If the hi < lo, that means there ISN'T an overlap so you wouldn't push it
    if (lo <= hi) res.push([lo, hi]);

    // Go to next A interval since it's end is less than the b end
    if (a[i][1] < b[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return res;
};

intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]);
