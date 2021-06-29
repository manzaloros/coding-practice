/* eslint-disable vars-on-top */
/* eslint-disable no-shadow */
/* eslint-disable no-var */
/* eslint-disable func-names */
// Functions are first class citizens
// Functions are treated as values
// Closures can help emulate private variables
// Functions can return functions
// When you store (enclose) a function as a value of a variable, JS engine
// stores the function definition, and also its entire lexical environment at
// that time.

// Use let instead of var

function add(x) {
  return function (y) {
    return x + y;
  };
}

var foo = add(1);
var bar = add(3);

foo(3);
// what does this return?
bar(2);
