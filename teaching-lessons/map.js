/* How can we double a list of numbers? */

const doubleAndPrintMe = function (nums) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i += 1) {
    doubled.push(numbers[i] * 2);
  }
  // console.log('Doubled in for-loop! ', doubled)
  return doubled;
}

const numbers = [1, 2, 3, 4, 5];
doubleAndPrintMe(numbers);

/* How can we double a single number? */
const doubleASingleNumber = function (num) {
  return num * 2;
}

let mapped = numbers.map(doubleASingleNumber);

mapped = numbers.map(function (num) {
  return num * 2;
});

/* Must have a return value! */
mapped = numbers.map(function (num) {
  num * 2;
  // Returns undefined implicitly
});
// console.log('Mapped without return in function: ', mapped);

mapped = numbers.map((num) => {
  return num * 2;
});

mapped = numbers.map((num) => { return num * 2; });

mapped = numbers.map(num => { return num * 2; });

/* Omitting parenthesis for argument, curly braces, and return statement */
mapped = numbers.map(num => num * 2);

/* Does not alter the original array! Bind a variable to the return value. */
numbers.map(num => num * 2);
// console.log('Mapped:  ', mapped);

/* Using index argument, doubles only even numbers */
mapped = numbers.map((num, index) => {
  if (index % 2 === 0) {
    return num * 2
  } else {
    return num;
  }
});
// console.log('Mapping every even index: ', mapped);

