/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
let filterRestaurants = function (restaurants, veganFriendly, maxPrice, maxDistance) {
  const veganFilter = (r) => (veganFriendly === 1 ? r[2] === 1 : r);

  const priceAndDistanceFilter = (r) => r[3] <= maxPrice && r[4] <= maxDistance;

  const compareByRatingThenId = (a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? 1 : -1;
    }

    return a[1] < b[1] ? 1 : -1;
  };

  const filtered = restaurants
    .filter(veganFilter)
    .filter(priceAndDistanceFilter);

  filtered.sort(compareByRatingThenId);

  const ids = filtered.map((r) => r[0]);

  return ids;
};

// filterRestaurants([[1, 4, 1, 40, 10],
//   [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]],
// 1,
// 50,
// 10);
// filterRestaurants([[1, 4, 1, 40, 10],
//   [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]],
//   0, 50, 10);
filterRestaurants([[1, 4, 1, 40, 10],
  [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]], 0, 30, 3);
