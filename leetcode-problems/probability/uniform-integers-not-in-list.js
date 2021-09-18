// O(n)
const randExcludeL = (l, n) => {
  const set = new Set(l);
  let num;
  while (true) {
    num = Math.floor(Math.random() * n);
    if (!set.has(num)) return num;
  }
};

// doesn't work
// const randExcludeLSorted = (l, n) => {
//   let [left, right] = [0, l.length - 1];

//   while (left < right) {
//     let mid = Math.floor((right - left) / 2) + left;

//     let pickableValuesLeft = l[mid] - (pickableValuesLeft + 1);
//     let pickableValuesRight = n - (l[mid] + 1) - mid;

//     let leftChance = pickableValuesLeft / (pickableValuesLeft + pickableValuesRight);
//     let rightChance = pickableValuesRight / (pickableValuesLeft + pickableValuesRight);

//     let random = Math.random();

//     if (random < leftChance) {
//       // go left
//       right = mid - 1;
//     } else {
//       // go right
//       left = mid + 1;
//     }
//   }
// };

const randExcludeLSorted = (list, n) => {
  const random = Math.floor(Math.random() * (n - list.length));

  let [l, r] = [0, list.length - 1];

  // Template 1
  while (l <= r) {
    let pivot = l + Math.floor((r - l) / 2);

    const numsLeftOfRight = list[pivot] - pivot;
    if (numsLeftOfRight < random) {
      l = pivot + 1;
    } else {
      r = pivot - 1;
    }
  }
  /*
    Right > left.
    The random missing number you're searching for is in the range of right ->
    to left.

    Subtract 1 to account for 0 indexed array, but we're looking for "randomth"
    num starting from 1. Like, the first missing number is 1 indexed, not 0.
  */

  return l + random - 1;
};

const whiteListRohan = (list, n) => {
  const set = new Set(list);

  const whitelist = [];
  for (let i = 0; i < n; i += 1) {
    if (!set.has(i)) whitelist.push(i);
  }

  let [l, r] = [0, whitelist.length - 1];

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (l === r) return whitelist[mid];

    const coinToss = Math.random();

    if (coinToss < 0.5) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
};

randExcludeLSorted([0, 1, 4, 5, 8], 10); // [2 3 6 7 9]
