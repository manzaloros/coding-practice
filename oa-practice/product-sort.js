/*
  A warehouse manager would like to sort the items in the stock. Given

  arr of n item values, sort array in ascending order, first by number of items
  with a certain value, then by values themselves.

  output: the arr sorted this particular way.

  Sort by lowest -> highest frequency, then ascending by number.

  Within the frequency sort, you sort by ascending order, too.
*/

const arr = [4, 5, 6, 5, 4, 3];

const productSort = (nums) => {
  const freq = new Map();

  nums.forEach((el) => {
    if (!freq.has(el)) freq.set(el, 0);
    freq.set(el, freq.get(el) + 1);
  });

  const customSort = (a, b) => {
    // if nums have same different frequencies, make the smaller num go first
    if (freq.get(a) < freq.get(b)) {
      return -1;
    }
    if (freq.get(a) > freq.get(b)) {
      return 1;
    }

    // If they have the same freq, just sort by their value
    return a < b ? -1 : 1;
  };

  nums.sort(customSort);

  return nums;
};

// productSort(arr);
// productSort([8, 5, 5, 5, 5, 1, 1, 1, 4, 4]);
