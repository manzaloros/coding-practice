//Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

var sum_pairs = function(ints, s) {
	let pairs = [];
	//iterate over integers
	for (let i = 0; i < ints.length; i ++) {
	  //iterate over each individual number
	  let currentPair = [];
	  for (let j = i + 1; j < ints.length; j++) {
	    //check if number added to next integers[j] equals the sum
	    if (ints[i] + ints[j] === s) {
	      //add number and integers[j] and second index to pair
	      currentPair.push(ints[i], ints[j], j);
	      //need to only push if a match is found
	      pairs.push(currentPair);
	      //need to break out of the loop if the match is found
	      //so we can move on to the next element
	      break;
	    }    
	  }
	}
	  if (!pairs.length) {
    return undefined;
  }
	//iterate over pairs
	//create smallest index variable
	let earlierIndex = pairs[0][2];
	for (let i = 0; i < pairs.length; i ++) {
	  //if the third element is smaller
	  if (pairs[i][2] < earlierIndex) {
	    //add it to the first pair
	    earlierIndex = pairs[i][2];
	  }
	}
	let firstPair = [];
	//match earlierIndex with element in pairs
	for (let i = 0; i < pairs.length; i++) {
		if (earlierIndex === pairs[i][2]) {
			firstPair = pairs[i].slice(0, -1);
		}
	}
	//if second element of pair is 
  return firstPair;
}




let inputActual = sum_pairs([10, 5, 2, 3, 7, 5],         10)
let inputExpected = [3,7];

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
		console.log(`failed, ${expected} expected, but got ${actual}`);
	}
}

assertArraysEqual(inputActual, inputExpected);
sum_pairs([4, 3, 2, 3, 4],         6);