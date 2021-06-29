/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-loop-func */
/* eslint-disable func-names */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
const arr = [];

const foo = () => {
  // Var is function scoped.
  // When the loop finishes, i will be 3. In foo()'s scope, i is 3 after foo is
  // invoked, so console logging i will return 3, not 1,2,3.
  // Curb this behaviour by initializing i with let instead of var.
  for (var i = 0; i < 3; i += 1) {
    arr.push(function () {
      return i;
    });
  }
};

foo();

// Returns [3,3,3] instead of [1,2,3]
arr.forEach((element) => console.log(element()));
