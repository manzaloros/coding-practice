/* You are given an array with random numbers [1,4,6,7,6]. Return an array in
the same order but with minimized values: [1,2,3,4,3]. So since 4 is greater
than 1 but less than 6 it becomes 2, 6 is greater than 4 so it's value should be
3. [3,5,3,8] would become [1,2,1,3]. My guess is we need to somehow calculate
the value that then would be subtracted from each number in the array. */

/*
1 is smallest value

Map arr value : index sort array

create prev variable

create output array iterate sorted, if curr isn't prev + 1 OR it matches the
prev changed variable, change map to be prev + 1: index. If you updated the
value, keep a variable of what the prev value was.

[1,4,6,6,7] [1,2,3,3,7]

{0: 1, 1: 2}
{1: [0], 4: [1]}
*/

// O(arr.length) Space
// O(arr.length log arr.length) Time
const minimizeArrayValues = (arr) => {
  // create map arr value: [indexes]
  const valueMap = new Map();

  arr.forEach((value, index) => {
    if (!Array.isArray(valueMap.get(value))) valueMap.set(value, []);

    valueMap.get(value).push(index);
  });

  // copy original array since sort() mutates original
  const original = arr.slice();
  // sort array
  arr.sort((a, b) => (a < b ? -1 : 1));
  const set = new Set(arr);
  // Make sure that first value of output will be 1
  let prevNum = 0;

  set.forEach((value) => {
    const newValue = prevNum + 1;

    if (value !== newValue) {
      valueMap.get(value).forEach((i) => {
        original[i] = newValue;
      });
    }

    prevNum = newValue;
  });

  return original;
};

// minimizeArrayValues([1, 4, 6, 7, 6]);
minimizeArrayValues([3, 5, 3, 8]);
