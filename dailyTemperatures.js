// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
//The big takeaway here was the isFutureWarmer function
//which lets us know if we should add a zero to the array

var dailyTemperatures = function(T) {
  //create daysToWait array
  let daysToWait = [];
  //iterate over temps
  for (let i = 0; i < T.length; i++) {
    //if future is warmer
    let days = 0;
    if (isFutureWarmer(i, T)) {	
      //iterate over future
      for (let j = i + 1; j < T.length; j++) {
      	//check if next day is warmer
      	if (T[j] > T[i]) {
      	  //add 1 to days
      	  days++;
      	  //add days to daysToWait
      	  daysToWait.push(days);
      	  //leave loop and go to next day
      	  break;
      	} else {
      	//if the next day isnt warmer
      	  //add 1 to days
      	  days++;
      	}
      }
    } else {
    //if the future isnt warmer
      //add zero to daysToWait
      daysToWait.push(days);
    }
  }
  //return daysToWait array
  return daysToWait;      
};

function isFutureWarmer(startingIndex, temps) {
	for (let i = startingIndex; i < temps.length; i++){
		//check if the temperature is ever higher for rest of array
		if (temps[i] > temps[startingIndex]) {
			return true;
			break;
		}
	}
	return false;
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
	if (sameValues && sameLength) {
		console.log(`passed`);
	} else {
		console.log(`failed, Expected "${expected}" but got "${actual}"`);
	}
}

let inputActual = dailyTemperatures([34,80,80,34,34,80,80,80,80,34]);
let inputExpected = [1,0,0,2,1,0,0,0,0,0];
assertArraysEqual(inputActual, inputExpected);
