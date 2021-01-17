// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p){
  //create string version of n
  let number = n.toString();
  //make into array of number
  number = number.split("");
  //create sum variable
  let sum = 0;
  //iterate over array
  for (let i = 0; i < number.length; i++) {
    //raise each element of array to correct power p+i
    sum +=  number[i] ** (p + i);
    //add to sum variable
  }
  //check if n divided by the sum exists
  if ((sum / n) === Math.floor(sum/n)) { 
    //if so, return that number
    return sum / n;
  } else {
    //else,
      //return -1
      return -1;
  }
}

function assertEquals(actual, expected) {
	if (actual === expected) {
		console.log(`passed`);
	} else {
		console.log(`failed, ${expected} expected, but got ${actual}`);
	}
}

let inputActual = digPow(46288,3);
let inputExpected = 51;
assertEquals(inputActual, inputExpected);
//what evaluates to true and false?
console.log(4 % 2 == false)