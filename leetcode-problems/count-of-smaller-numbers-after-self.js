/**
 * @param {number[]} nums
 * @return {number[]}
 */
let countSmaller = function (nums) {
  const { length: n } = nums;
  const indices = Array(n).fill(0).map((el, i) => i);
  const result = Array(n).fill(0);

  const merge = (left, right, mid) => {
    let [i, j] = [left, mid];

    const temp = [];

    while (i < mid && j < right) {
      if (nums[indices[i]] <= nums[indices[j]]) {
        result[indices[i]] += j - mid;
        temp.push(indices[i]);

        i += 1;
      } else {
        temp.push(indices[j]);
        j += 1;
      }
    }

    while (i < mid) {
      result[indices[i]] += (j - mid);
      temp.push(indices[i]);

      i += 1;
    }

    while (j < right) {
      temp.push(indices[j]);

      j += 1;
    }

    for (let k = left; k < right; k += 1) indices[k] = temp[k - left];
  };

  const mergeSort = (left, right) => {
    if (right - left > 1) {
      const mid = Math.floor((left + right) / 2);

      mergeSort(left, mid);
      mergeSort(mid, right);

      merge(left, right, mid);
    }
  };

  mergeSort(0, n);

  return result;
};

// countSmaller([5, 2, 6, 1]);
countSmaller([0, 1, 2]);
