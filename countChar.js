function count (string) {
  //sassy one-liner
  let output = {};
  string ? [...string].forEach(c => output[c] ? output[c]++ : output[c] = 1) : output; 
  
  //my first attempt
  // for (let i = 0; i < string.length; i++) {
  //   let c = string[i];
  //   output[c] ? output[c]++ : output[c] = 1;
    // if (output[c]) {
    //   output[c]++;
    // } else {
    //     output[c] = 1;
    // }
  // }
  return output;
}

function assertObjectEquals(actual, expected) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`failed Expected "${expected}", but got "${actual}"`);
  }
}

let inputActual = count("aba");
let inputExpected = {a:2, b:1};
assertObjectEquals(inputActual, inputExpected);

