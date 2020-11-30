/* Merge 2 sorted arrays

Algorithm:
Take two sorted arrays
Declare two indexes to track each array, starting at 0
While there are items left in either array,
Push the lesser of the current elements of both arrays to the result
Finally, push the remaining non-merged elements to the result and return

Looks like the ++ operator increments AFTER it adds to the array.
below code is the same as:
result.push(arr1[i]);
i++;
*/

const merge = function (arr1, arr2, [result, i, j] = [[], 0, 0]) {
  while (i < arr1.length || j < arr2.length) {
    result.push(arr1[i] <= arr2[j] ? arr1[i++] : arr2[j++])
  }

  return result.concat(i < arr1.length ? arr1.slice(i) : arr2.slice(j));
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));