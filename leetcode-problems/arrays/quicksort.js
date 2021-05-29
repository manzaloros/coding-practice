const quickSort = (list) => {
  const partition = (lo, hi) => {
    const pivot = list[hi];
    let i = lo;

    for (let j = lo; j < hi; j += 1) {
      if (list[j] < pivot) {
        [list[j], list[i]] = [list[i], list[j]];
        i += 1;
      }
    }

    [list[i], list[hi]] = [list[hi], list[i]];

    return i;
  };

  const sort = (lo, hi) => {
    if (lo < hi) {
      const p = partition(lo, hi);

      sort(lo, p - 1);
      sort(p + 1, hi);
    }
  };

  sort(0, list.length - 1);

  return list;
};

// Alternative from LC user:
const sortArray = function (nums) {
  return quicksort(nums, 0, nums.length - 1);
};

const quicksort = function (nums, left, right) {
  if (left >= right) {
    return nums;
  }

  const pivot = nums[Math.floor((left + right) / 2)];
  const index = partition(nums, left, right, pivot);

  quicksort(nums, left, index - 1);
  quicksort(nums, index, right);

  return nums;
};

const partition = function (nums, left, right, pivot) {
  while (left <= right) {
    while (nums[left] < pivot) {
      left++;
    }
    while (nums[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  return left;
};
