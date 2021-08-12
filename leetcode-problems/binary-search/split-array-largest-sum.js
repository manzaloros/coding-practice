let splitArray = (nums, m) => {
  let high = 0;
  let low = nums[0];

  nums.forEach((num) => {
    high += num;
    low = Math.max(low, num);
  });

  const canPartition = (sum) => {
    let partition = 0;
    let currentSum = 0;

    nums.forEach((num) => {
      if (currentSum + num <= sum) {
        currentSum += num;
      } else {
        partition += 1;
        currentSum = num;
      }
    });

    return partition + 1 <= m;
  };

  const binarySearch = () => {
    let result = high;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (canPartition(mid)) {
        result = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return result;
  };

  return binarySearch();
};

splitArray([1, 2, 3, 4, 5], 2);
