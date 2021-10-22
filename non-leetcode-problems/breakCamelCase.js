// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// solution("camelCasing")  ==  "camel Casing"

const solution = function (str) {
  return str.split(/(?=[A-Z])/).join(" ");
}
// /  / signifies the start of the regular expression
// (?=) is "positive lookahead", matches a group after the main expression without including it in result
//removing the positive lookahead returns [camel, C, asing]
//
// [] "character set", matches any character in the set
// A-Z matches characters in the range from A to Z, case sensitive


const assertEquals = function (actual, expected) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`failed Expected "${expected}" but got "${actual}"`);
  }
}
let string = "camelCasing";
let inputActual = solution(string);
let inputExpected = "camel Casing";
//assertEquals(inputActual, inputExpected);
//console.log(string.split(/(?=[A-Z])/));

module.exports = solution;