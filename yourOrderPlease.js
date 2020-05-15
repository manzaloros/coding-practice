// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  //create result string
  let result = "";
  //create words array
  let arrayWords = words.split(" ");
  //create numbers container array
  let numberContainer = [];
  //iterate over array to find numbers and add to container
  for (let i = 0; i < arrayWords.length; i++) {
    //iterate over each character in current word
    for (let j = 0; j < arrayWords[i].length; j++) {
      //create current number tuple
      let tuple = [];
      //if character is a number 
      //need to check if number correctly
      if (!isNaN(arrayWords[i][j])) {
        //add the number and character to the tuple
        tuple.push(arrayWords[i][j], arrayWords[i]);
        //push tuple to nubmers container array
        numberContainer.push(tuple);
      }
    }
  }
  //sort the container array by their numbers
  //this is the bubble sort
  let length = numberContainer.length;
  for (let i = 0; i < length; i++) {
  	//iterates over each element
  	for (let j = 0; j< (length - i - 1); j++) {
  		//checks adjacent element
  		if (numberContainer[j][0] > numberContainer[j + 1][0]) {
  			let tmp = numberContainer[j];
  			numberContainer[j] = numberContainer[j+1];
  			numberContainer[j+1] = tmp;
  		}
    }
  }
  //iterate over sorted container
  for (let i = 0; i < numberContainer.length; i ++) {
    //add each element the result string
    let word = numberContainer[i][1];
    result += word + " ";
  }
  //return result string without space at end
  return result.slice(0,-1);
}



function assertEquals(actual, expected, testName) {
	if (actual === expected) {
		console.log(`passed`);
	} else {
		console.log(`failed [${testName}] "${expected}" expected, but got  "${actual}"`);
	}
}

let inputActual = order("is2 Thi1s T4est 3a");
let inputExpected = "Thi1s is2 3a T4est";
assertEquals(inputActual, inputExpected, "returns correctly formmatted string");