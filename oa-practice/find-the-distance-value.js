/*
  Given two integer arrays a and b, and an integer value d, your task is to find the comparator value between these arrays.

The comparator value is defined as the number of elements x ∈ a such that there are no elements y ∈ b where |x - y| ≤ d. In other words, it's the number of elements in a that are more than d away from any element of b.

Return the comparator value as an integer.

For eg. a = [2, 9] and b = [16, 13, 8], d = 3 should return 1.

n = 9
9 - 16 = 7 > 3
9 - 13 = 4 > 3
9 - 8 = 1 < 3

n = 2
2 - 16 = 14 > 3
2 - 13 = 11 > 3
2 - 8 = 6 > 3
*/
const findTheDistanceValue = (a, b, d) => {
  const getIndex = (num) => (d === 0 ? num : Math.floor(num / d));

  // Put b nums into buckets that track min and max
  const map = b.reduce((indexMap, curr) => {
    const index = getIndex(curr);

    if (!indexMap.has(index)) {
      indexMap.set(index, [curr, curr]);
    } else {
      indexMap.get(index)[0] = Math.min(indexMap.get(index)[0], curr);
      indexMap.get(index)[1] = Math.min(indexMap.get(index)[1], curr);
    }

    return indexMap;
  }, new Map());

  // For each num in a, check the adjacent 3 buckets in the map
  return a.reduce((result, curr) => {
    let index = getIndex(curr) - 1;
    let found = false;

    for (let i = -1; i <= 1; i += 1, index += 1) {
      const indices = map.get(index);

      if (indices) {
        if (Math.abs(indices[0] - curr) <= d) found = true;
        if (Math.abs(indices[1] - curr) <= d) found = true;
      }
    }

    if (!found) result += 1;

    return result;
  }, 0);
};

findTheDistanceValue([2, 9], [16, 13, 8], 3);
