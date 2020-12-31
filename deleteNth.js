//output an array that contains each number of the original array
//at most N times without reordering.
//Input is [1,2,3,1,2,1,2,3].
//          1 2 3 1 2(DROP)3
//Each number can only occur in list n times.

function deleteNth(arr, n) {
  //create output array
  let output = [];
  //create numbers object
  let numberCounts = {};
  //iterate over array
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    console.log(numberCounts);
    //if numbers object has the current array[i]
    if (numberCounts[currentNumber]) {
      //if numbers object value is n-1
      if (numberCounts[currentNumber] === n) {
        //continue on to next element of array
        continue;
      } else {
        //else
        //increment numbers object value
        numberCounts[currentNumber]++;
        //add nubmer to output array
        output.push(currentNumber);
      }
    } else {
      //else
      //add current number to object = 1
      numberCounts[currentNumber] = 1;
      //add number to output array
      output.push(currentNumber);
    }
  }
  //return output array
  return output;
}

function assertArraysEqual(actual, expected) {
  let sameLength = actual.length === expected.length;
  let sameValues = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      sameValues = false;
      break;
    }
  }
  if (sameLength && sameValues) {
    console.log(`passed`);
  } else {
    console.log(`failed. Expected ${expected}, but got ${actual}`);
  }
}

let inputActual = deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2);
let inputExpected = [1, 2, 3, 1, 2, 3];
assertArraysEqual(inputActual, inputExpected);

