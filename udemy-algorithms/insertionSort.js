/* Starts with a sorted 'portion' of the array
Start by picking 2nd element in the array
Compare to one before, and swap if needed
Continue to next element and if it's in the wrong position
iterate through the sorted portion (left side) to place the element in the
correct place.

Repeat until array is sorted

To visualize, don't start from first loop.
Start when most of the array is sorted, near the end of the loop

-----------------------------------------------------------------
My conception:
Basically your inner loop, going backwards from current element index - 1
Only iterates as long as your current element is out of order.
In the inner loop you copy each element with the next place,
At the end of the inner loop, you take your stored current value and copy it at the
correct place (insertionPoint, or j)

The big point is that you copy that stored current element at the very end.
AND the inner loop has a built in short-circuit.
-------------------------------------------------------------------
Time complexity, O(n^2) worst case. If the data is almost all sorted, it's O(n)
Insertion sort also works well with live (streaming) data. Array can be added to as you sort.
*/

const insertionSort = (arr, insertionPoint = 0) => {
  for (let i = 1; i < arr.length; i += 1) {
    let currentValue = arr[i];
    for (let insertionPoint = i - 1;
      insertionPoint >= 0 && arr[insertionPoint] > currentValue;
      insertionPoint -= 1) {
      arr[insertionPoint + 1] = arr[insertionPoint];
    }
    arr[insertionPoint] = currentValue;
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));