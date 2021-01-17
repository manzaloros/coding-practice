//given an array of arrays
//each sub array has two numbers, a numerator and a denominator
//return, as a string, in the format "(n,d)(n,d), etc."
//find the common denominator 
//all numbers are positive

function convertFrac(array) {
  if (array.length === 0) {
    return "";
  }
  let fractions = "";
  let denom = array.reduce(function(p, c) {
    return lCM(p,c[1]);
  }, 1);
  console.log(denom)
  // let denominators = []; 
  // for (let i = 0; i < array.length; i++) {
  //   denominators.push(array[i][1]);
  // }
  // let lowestCommonD = denominators.reduce(function(acc,item) {
  //   console.log("acc:", acc, "item", item, "lcm:", lCM(acc, item));
  //   return lCM(acc, item);
  // });
  // for (let i = 0; i < array.length; i++) {
  //   fractions += `(${array[i][0] * (lowestCommonD / array[i][1])},${lowestCommonD})`;
  // }
  return array.map((v) => {`(${v[0] * denom / v[1]}),${denom})`}).join("");  
  return fractions;
}

//returns least common multiple of two numbers
function lCM(a,b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  return (a * b) / gCD(a,b);
}
//returns greatest common divisor of the given numbers
function gCD(a,b) {
  if (a < 1 || b < 1) {
    return undefined;
  }
  let remainder = 0;
  do {
    remainder = a % b;
    a = b;
    b = remainder;
  } while (b != 0);
  return a;
}

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`failed Expected "${expected}", but got "${actual}"`);
  }
}

let lst = [ [ 69, 130 ], [ 87, 1310 ], [ 3, 4 ] ];
let inputActual = convertFrac(lst);
let inputExpected = '(18078,34060)(2262,34060)(25545,34060)';
assertEquals(inputActual, inputExpected);

